using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace ACG.ONP.SIM.Infrastructure.Identity.Entities
{
    public class ApplicationRole : IdentityRole<string>
    {
        public ApplicationRole()
        {
        }

        public ApplicationRole(string roleName) : base(roleName)
        {
            Id = Guid.NewGuid().ToString();
        }

        public virtual ICollection<ApplicationUserRole> UserRoles { get; set; }
        public virtual ICollection<ApplicationRoleClaim> RoleClaims { get; set; }
    }
}