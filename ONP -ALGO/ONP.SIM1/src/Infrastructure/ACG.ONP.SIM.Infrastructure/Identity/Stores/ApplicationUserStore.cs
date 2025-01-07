using System.Threading;
using System.Threading.Tasks;
using ACG.ONP.SIM.Infrastructure.Identity.Entities;
using ACG.ONP.SIM.Infrastructure.Persistence;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ACG.ONP.SIM.Infrastructure.Identity.Stores
{
    public class ApplicationUserStore : UserStore<ApplicationUser, ApplicationRole,
        ApplicationDbContext, string, ApplicationUserClaim, ApplicationUserRole,
        ApplicationUserLogin, ApplicationUserToken, ApplicationRoleClaim>, IQueryableUserStore<ApplicationUser>
    {
        public ApplicationUserStore(ApplicationDbContext context, IdentityErrorDescriber describer = null) : base(
            context,
            describer)
        {
        }

        public override Task<ApplicationUser> FindByNameAsync(string normalizedUserName,
            CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            return Users
                .Include(e => e.UserRoles)
                .ThenInclude(ur => ur.Role)
                .FirstOrDefaultAsync(u => u.NormalizedUserName == normalizedUserName, cancellationToken);
        }

        public override Task<ApplicationUser> FindByEmailAsync(string email,
            CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            return Users
                .Include(e => e.UserRoles)
                .ThenInclude(ur => ur.Role)
                .FirstOrDefaultAsync(u => u.NormalizedEmail == email, cancellationToken);
        }
    }
}