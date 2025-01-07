using System;
using System.Collections.Generic;

namespace ACG.ONP.SIM.Application.Common.Interfaces
{
    public interface ICurrentUserService
    {
        string UserId { get; }
        Guid? StorageAreaId { get; }
        public string UserName { get; }
        List<string> RoleNames { get; }

        public bool IsLoggedIn()
        {
            return !string.IsNullOrEmpty(UserId);
        }
    }
}