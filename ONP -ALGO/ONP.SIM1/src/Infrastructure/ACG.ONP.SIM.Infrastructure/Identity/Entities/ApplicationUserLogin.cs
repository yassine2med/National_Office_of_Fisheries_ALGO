using Microsoft.AspNetCore.Identity;

namespace ACG.ONP.SIM.Infrastructure.Identity.Entities
{
    public class ApplicationUserLogin : IdentityUserLogin<string>
    {
        public virtual ApplicationUser User { get; set; }
    }
}