using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using ACG.ONP.SIM.Infrastructure.Identity.Entities;
using IdentityModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace ACG.ONP.SIM.Infrastructure.Identity
{
    internal class ApplicationUserClaimsPrincipalFactory : UserClaimsPrincipalFactory<ApplicationUser>
    {
        private readonly RoleManager<ApplicationRole> _roleManager;

        public ApplicationUserClaimsPrincipalFactory(
            UserManager<ApplicationUser> userManager,
            IOptions<IdentityOptions> optionsAccessor, RoleManager<ApplicationRole> roleManager)
            : base(userManager, optionsAccessor)
        {
            _roleManager = roleManager;
        }

        protected override async Task<ClaimsIdentity> GenerateClaimsAsync(ApplicationUser user)
        {
            var identity = await base.GenerateClaimsAsync(user);

            identity.AddClaim(new Claim(JwtClaimTypes.Name,
                user.FirstName + " " + (string.IsNullOrEmpty(user.LastName) ? "" : user.LastName)));

            var claims = new List<Claim>();

            if (UserManager.SupportsUserRole)
            {
                var roles = await UserManager.GetRolesAsync(user);
                foreach (var roleName in roles)
                {
                    claims.Add(new Claim(JwtClaimTypes.Role, roleName));
                    if (_roleManager.SupportsRoleClaims)
                    {
                        var role = await _roleManager.FindByNameAsync(roleName);
                        if (role != null) claims.AddRange(await _roleManager.GetClaimsAsync(role));
                    }
                }
            }

            identity.AddClaims(claims);

            return identity;
        }
    }
}