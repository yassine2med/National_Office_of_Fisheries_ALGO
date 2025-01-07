using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ACG.ONP.SIM.Infrastructure.Identity.Entities;
using IdentityModel;
using IdentityServer4;
using IdentityServer4.Extensions;
using IdentityServer4.Models;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;

namespace ACG.ONP.SIM.WebApi.Identity.Services
{
    public sealed class ProfileService : IProfileService
    {
        private readonly RoleManager<ApplicationRole> _roleMgr;
        private readonly IUserClaimsPrincipalFactory<ApplicationUser> _userClaimsPrincipalFactory;
        private readonly UserManager<ApplicationUser> _userMgr;

        public ProfileService(
            UserManager<ApplicationUser> userMgr,
            RoleManager<ApplicationRole> roleMgr,
            IUserClaimsPrincipalFactory<ApplicationUser> userClaimsPrincipalFactory)
        {
            _userMgr = userMgr;
            _roleMgr = roleMgr;
            _userClaimsPrincipalFactory = userClaimsPrincipalFactory;
        }

        public async Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            var sub = context.Subject.GetSubjectId();
            var user = await _userMgr.FindByIdAsync(sub);
            var userClaims = await _userClaimsPrincipalFactory.CreateAsync(user);

            var claims = userClaims.Claims.ToList();
            claims = claims.Where(claim => context.RequestedClaimTypes.Contains(claim.Type)).ToList();

            //if (context.Caller == IdentityServerConstants.ProfileDataCallers.UserInfoEndpoint)
            //{
            claims.Add(new Claim(JwtClaimTypes.Name,
                user.FirstName + " " + (string.IsNullOrEmpty(user.LastName) ? "" : user.LastName)));
            //}

            if (_userMgr.SupportsUserRole)
            {
                var roles = await _userMgr.GetRolesAsync(user);
                foreach (var roleName in roles)
                {
                    claims.Add(new Claim(JwtClaimTypes.Role, roleName));
                    if (_roleMgr.SupportsRoleClaims &&
                        context.Caller == IdentityServerConstants.ProfileDataCallers.UserInfoEndpoint)
                    {
                        var role = await _roleMgr.FindByNameAsync(roleName);
                        if (role != null) claims.AddRange(await _roleMgr.GetClaimsAsync(role));
                    }
                }
            }

            context.IssuedClaims = claims;
        }

        public async Task IsActiveAsync(IsActiveContext context)
        {
            var sub = context.Subject.GetSubjectId();
            var user = await _userMgr.FindByIdAsync(sub);
            context.IsActive = user != null;
        }
    }
}