using System;
using System.Data;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Application.Common.Specifications;
using ACG.ONP.SIM.Domain.Common;
using ACG.ONP.SIM.Domain.Entities;
using ACG.ONP.SIM.Domain.Enums;
using ACG.ONP.SIM.Infrastructure.Identity.Entities;
using ACG.ONP.SIM.Infrastructure.Persistence.Configurations;
using IdentityServer4.EntityFramework.Entities;
using IdentityServer4.EntityFramework.Extensions;
using IdentityServer4.EntityFramework.Interfaces;
using IdentityServer4.EntityFramework.Options;
using ImageProcessor;
using ImageProcessor.Plugins.WebP.Imaging.Formats;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Options;

namespace ACG.ONP.SIM.Infrastructure.Persistence
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, string,
            ApplicationUserClaim, ApplicationUserRole, ApplicationUserLogin, ApplicationRoleClaim, ApplicationUserToken
        >,
        IPersistedGrantDbContext, IApplicationDbContext
    {
        private static readonly MethodInfo SetGlobalQueryMethod = typeof(ApplicationDbContext)
            .GetMethods(BindingFlags.NonPublic | BindingFlags.Instance)
            .Single(t => t.IsGenericMethod && t.Name == "SetGlobalQuery");

        private readonly ICurrentUserService _currentUserService;
        private readonly IDateTime _dateTime;
        private readonly IOptions<OperationalStoreOptions> _operationalStoreOptions;
        private readonly IStorage _storage;
        private IDbContextTransaction _currentTransaction;

        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions,
            ICurrentUserService currentUserService,
            IDateTime dateTime,
            IStorage storage) : base(options)
        {
            _operationalStoreOptions = operationalStoreOptions;
            _currentUserService = currentUserService;
            _dateTime = dateTime;
            _storage = storage;
        }

        public DbSet<City> Cities { get; set; }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            var userId = $"{null}:{null}:{null}";
            if (_currentUserService.IsLoggedIn())
                if (_currentUserService.RoleNames != null)
                    userId =
                        $"{_currentUserService.UserName}:{_currentUserService.UserId}:{string.Join(',', _currentUserService.RoleNames)}";
                else
                    userId = $"{_currentUserService.UserName}:{_currentUserService.UserId}:{null}";

            foreach (var entry in ChangeTracker.Entries<IAuditableEntity<string>>())
                switch (entry.State)
                {
                    case EntityState.Added:
                        entry.Entity.CreatedBy = userId;
                        entry.Entity.Created = _dateTime.Now;
                        break;
                    case EntityState.Modified:
                        entry.Entity.LastModifiedBy = userId;
                        entry.Entity.LastModified = _dateTime.Now;
                        break;
                }

            foreach (var entry in ChangeTracker.Entries<AbstractDocument>().Where(e => e.State == EntityState.Added))
            {
                if (entry.Entity.Data != null && entry.Entity.Data.Count() != 0)
                {
                    var docId = SaveDocumentDataAsync(entry.Entity, entry.Entity.Type == DocumentType.Document1)
                        .GetAwaiter().GetResult();
                    if (!string.IsNullOrEmpty(entry.Entity.Uri)) docId = $"{entry.Entity.Uri}:{docId}";

                    entry.Entity.Uri = docId;
                }

                entry.Entity.Data = null;
            }

            return base.SaveChangesAsync(cancellationToken);
        }

        public async Task BeginTransactionAsync()
        {
            if (_currentTransaction != null) return;

            _currentTransaction = await base.Database.BeginTransactionAsync(IsolationLevel.ReadCommitted)
                .ConfigureAwait(false);
        }

        public async Task CommitTransactionAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            try
            {
                await SaveChangesAsync(cancellationToken).ConfigureAwait(false);

                _currentTransaction?.Commit();
            }
            catch
            {
                RollbackTransaction();
                throw;
            }
            finally
            {
                if (_currentTransaction != null)
                {
                    _currentTransaction.Dispose();
                    _currentTransaction = null;
                }
            }
        }

        public void RollbackTransaction()
        {
            try
            {
                _currentTransaction?.Rollback();
            }
            finally
            {
                if (_currentTransaction != null)
                {
                    _currentTransaction.Dispose();
                    _currentTransaction = null;
                }
            }
        }

        public IQueryable<TEntity> ApplySpecification<TEntity>(ISpecification<TEntity> spec) where TEntity : class
        {
            return SpecificationEvaluator<TEntity>.GetQuery(Set<TEntity>().AsQueryable(), spec);
        }

        public DbSet<PersistedGrant> PersistedGrants { get; set; }
        public DbSet<DeviceFlowCodes> DeviceFlowCodes { get; set; }

        Task<int> IPersistedGrantDbContext.SaveChangesAsync()
        {
            return base.SaveChangesAsync();
        }

        private void SetGlobalQuery<TEntity>(ModelBuilder builder) where TEntity : class, IDeletableEntity
        {
            builder.Entity<TEntity>().HasQueryFilter(b => !(b.IsDeleted ?? false));
        }

        private async Task<string> SaveDocumentDataAsync(AbstractDocument entity, bool isImage = false)
        {
            using (Stream stream = new MemoryStream(entity.Data))
            {
                var docId =
                    await _storage.SaveFileAsync(stream, entity.Type.ToString("G").ToLower(), entity.Id.ToString());
                if (isImage)
                {
                    using (var webPStream = new MemoryStream())
                    {
                        using (var imageFactory = new ImageFactory(false))
                        {
                            imageFactory.Load(entity.Data).Format(new WebPFormat()).Quality(100).Save(webPStream);
                            await _storage.SaveFileAsync(webPStream, entity.Type.ToString("G").ToLower(),
                                entity.Id + "_webp");
                        }
                    }

                    var size = ResizeKeepAspect(new Size(640, 360), 640, 360);
                    var image = Image.FromStream(stream);
                    var thumb = image.GetThumbnailImage(size.Width, size.Height, () => false, IntPtr.Zero);
                    using (var ms = new MemoryStream())
                    {
                        thumb.Save(ms, ImageFormat.Png);
                        _storage.SaveFileAsync(ms, entity.Type.ToString("G").ToLower(),
                            entity.Id + "_thumb");
                        using (var webPStream = new MemoryStream())
                        {
                            using (var imageFactory = new ImageFactory(false))
                            {
                                imageFactory.Load(ms.ToArray()).Format(new WebPFormat()).Quality(100).Save(webPStream);
                                await _storage.SaveFileAsync(webPStream, entity.Type.ToString("G").ToLower(),
                                    entity.Id + "_thumb_webp");
                            }
                        }
                    }
                }

                return docId;
            }
        }

        private Size ResizeKeepAspect(Size src, int maxWidth, int maxHeight, bool enlarge = false)
        {
            maxWidth = enlarge ? maxWidth : Math.Min(maxWidth, src.Width);
            maxHeight = enlarge ? maxHeight : Math.Min(maxHeight, src.Height);

            var rnd = Math.Min(maxWidth / (decimal) src.Width, maxHeight / (decimal) src.Height);
            return new Size((int) Math.Round(src.Width * rnd), (int) Math.Round(src.Height * rnd));
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigurePersistedGrantContext(_operationalStoreOptions.Value);
            builder.ApplyBaseEntityConfiguration();
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            builder.Entity<ApplicationUser>(b =>
            {
                // Each User can have many UserClaims
                b.HasMany(e => e.Claims)
                    .WithOne(e => e.User)
                    .HasForeignKey(uc => uc.UserId)
                    .IsRequired();

                // Each User can have many UserLogins
                b.HasMany(e => e.Logins)
                    .WithOne(e => e.User)
                    .HasForeignKey(ul => ul.UserId)
                    .IsRequired();

                // Each User can have many UserTokens
                b.HasMany(e => e.Tokens)
                    .WithOne(e => e.User)
                    .HasForeignKey(ut => ut.UserId)
                    .IsRequired();

                // Each User can have many entries in the UserRole join table
                b.HasMany(e => e.UserRoles)
                    .WithOne(e => e.User)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();
            });

            builder.Entity<ApplicationRole>(b =>
            {
                // Each Role can have many entries in the UserRole join table
                b.HasMany(e => e.UserRoles)
                    .WithOne(e => e.Role)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();

                // Each Role can have many associated RoleClaims
                b.HasMany(e => e.RoleClaims)
                    .WithOne(e => e.Role)
                    .HasForeignKey(rc => rc.RoleId)
                    .IsRequired();
            });


            var cascadeFKs = builder.Model.GetEntityTypes().SelectMany(t => t.GetForeignKeys())
                .Where(fk => !fk.IsOwnership && fk.DeleteBehavior == DeleteBehavior.Cascade);
            foreach (var fk in cascadeFKs) fk.DeleteBehavior = DeleteBehavior.Restrict;

            foreach (var entity in builder.Model.GetEntityTypes()
                .Where(e => typeof(IDeletableEntity).IsAssignableFrom(e.ClrType)))
                SetGlobalQueryMethod.MakeGenericMethod(entity.ClrType).Invoke(this, new object[] {builder});
        }
    }
}