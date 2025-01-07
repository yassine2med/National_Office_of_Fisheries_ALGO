using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using ACG.ONP.SIM.Application.Common.Interfaces;
using IdentityModel;
using Microsoft.AspNetCore.Http;

namespace ACG.ONP.SIM.WebApi.Common.Services
{
    public class CurrentUserService : ICurrentUserService
    {
        public CurrentUserService(IHttpContextAccessor httpContextAccessor)
        {
            var zoneInfo = httpContextAccessor.HttpContext?.User?.FindFirstValue(JwtClaimTypes.ZoneInfo);

            UserId = httpContextAccessor.HttpContext?.User?.FindFirstValue(JwtClaimTypes.Subject);
            UserName = httpContextAccessor.HttpContext?.User?.FindFirstValue(JwtClaimTypes.Name);
            if (!string.IsNullOrEmpty(zoneInfo))
                StorageAreaId = Guid.Parse(zoneInfo);
            RoleNames = httpContextAccessor.HttpContext?.User?.FindAll(JwtClaimTypes.Role).Select(e => e.Value)
                .ToList();
        }

        public string UserId { get; }
        public Guid? StorageAreaId { get; }
        public string UserName { get; }
        public List<string> RoleNames { get; }
    }
}