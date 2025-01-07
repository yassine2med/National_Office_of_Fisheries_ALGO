using System.Linq;
using ACG.ONP.SIM.Application.Common.Specifications;
using ACG.ONP.SIM.Domain.Constants;
using ACG.ONP.SIM.Domain.Entities.Criterias;
using ACG.ONP.SIM.Infrastructure.Identity.Entities;

namespace ACG.ONP.SIM.Infrastructure.Identity
{
    public class UserSearchSpecification : BaseSpecification<ApplicationUser>
    {
        public UserSearchSpecification(UserCriteria criteria)
        {
            AddInclude(u => u.UserRoles);
            AddInclude("UserRoles.Role");

            AddCriteria(u => !(u.IsExternal ?? false));
            AddCriteria(u => !u.UserRoles.Any(ur => ur.Role.Name == AuthorizationConstants.Roles.Administrators));

            AddCriteria(u => !(u.IsDeleted ?? false));

            if (criteria.IsDeactivated.HasValue)
                AddCriteria(s => s.IsDeactivated == criteria.IsDeactivated.Value);

            if (!string.IsNullOrEmpty(criteria.RoleId))
                AddCriteria(s => s.UserRoles.Any(r => r.RoleId == criteria.RoleId));

            if (criteria.Roles.Count > 0)
                AddCriteria(s => s.UserRoles.Any(r => criteria.Roles.Contains(r.Role.Name)));

            if (!string.IsNullOrEmpty(criteria.UserName))
                AddCriteria(s => s.UserName.StartsWith(criteria.UserName));

            if (!string.IsNullOrEmpty(criteria.Email))
                AddCriteria(s => s.Email.StartsWith(criteria.Email));

            if (!string.IsNullOrEmpty(criteria.LastName))
                AddCriteria(s => s.LastName.StartsWith(criteria.LastName));

            if (!string.IsNullOrEmpty(criteria.FirstName))
                AddCriteria(s => s.FirstName.StartsWith(criteria.FirstName));
        }
    }
}