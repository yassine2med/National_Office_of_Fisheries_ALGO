﻿using Microsoft.AspNetCore.Identity;

namespace ACG.ONP.SIM.Infrastructure.Identity.Entities
{
    public class ApplicationUserClaim : IdentityUserClaim<string>
    {
        public virtual ApplicationUser User { get; set; }
    }
}