using System;
using System.Collections.Generic;
using System.Linq;
using ACG.ONP.SIM.Application.Common.Mappings;
using ACG.ONP.SIM.Domain.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Identity;

namespace ACG.ONP.SIM.Infrastructure.Identity.Entities
{
    public class ApplicationUser : IdentityUser<string>, IMapTo<User>, IMapFrom<User>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public virtual ICollection<ApplicationUserClaim> Claims { get; set; }
        public virtual ICollection<ApplicationUserLogin> Logins { get; set; }
        public virtual ICollection<ApplicationUserToken> Tokens { get; set; }
        public virtual ICollection<ApplicationUserRole> UserRoles { get; set; }

        public string CreatedBy { get; set; }
        public DateTime Created { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime? LastModified { get; set; }
        public bool? IsExternal { get; set; }
        public bool? IsDeleted { get; set; }
        public bool IsDeactivated { get; set; }

        public virtual void Mapping(Profile profile)
        {
            profile.CreateMap<ApplicationUser, User>()
                .ForMember(d => d.RoleName,
                    o => o.MapFrom(s => s.UserRoles.Select(ur => ur.Role.Name).FirstOrDefault()));
            profile.CreateMap<User, ApplicationUser>();
        }
    }
}