using System.Collections.Generic;
using System.Threading.Tasks;
using ACG.ONP.SIM.Domain.Entities;

namespace ACG.ONP.SIM.Application.Common.Interfaces
{
    public interface IIdentityService
    {
        Task<string> GetUserNameAsync(string userId);
        Task<User> GetUserByEmailAsync(string email);
        Task<List<string>> GetUserClaimsAsync(string userId, string claimType);
    }
}