using ACG.ONP.SIM.Infrastructure.Identity.Entities;
using ACG.ONP.SIM.Infrastructure.Persistence;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace ACG.ONP.SIM.Infrastructure.Identity.Stores
{
    public class ApplicationRoleStore : RoleStore<ApplicationRole, ApplicationDbContext,
        string, ApplicationUserRole, ApplicationRoleClaim>
    {
        public ApplicationRoleStore(ApplicationDbContext context, IdentityErrorDescriber describer = null)
            : base(context, describer)
        {
        }
    }
}