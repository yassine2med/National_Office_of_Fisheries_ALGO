using Microsoft.AspNetCore.Identity;

namespace ACG.ONP.SIM.Infrastructure.Identity.Entities
{
    public class ApplicationUserRole : IdentityUserRole<string>
    {
        public virtual ApplicationUser User { get; set; }
        public virtual ApplicationRole Role { get; set; }
    }
}