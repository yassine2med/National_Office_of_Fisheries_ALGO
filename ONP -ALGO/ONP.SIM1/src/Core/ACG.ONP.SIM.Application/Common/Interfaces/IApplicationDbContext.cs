using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Specifications;
using ACG.ONP.SIM.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace ACG.ONP.SIM.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<City> Cities { get; set; }

        IQueryable<TEntity> ApplySpecification<TEntity>(ISpecification<TEntity> spec) where TEntity : class;

        DbSet<TEntity> Set<TEntity>() where TEntity : class;
        EntityEntry Entry([NotNull] object entity);

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
        Task CommitTransactionAsync(CancellationToken cancellationToken = new CancellationToken());
        Task BeginTransactionAsync();
        void RollbackTransaction();
    }
}