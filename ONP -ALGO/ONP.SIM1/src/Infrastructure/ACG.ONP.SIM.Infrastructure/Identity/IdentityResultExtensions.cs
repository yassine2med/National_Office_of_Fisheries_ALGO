using System.Linq;
using ACG.ONP.SIM.Application.Common.Models;
using Microsoft.AspNetCore.Identity;

namespace ACG.ONP.SIM.Infrastructure.Identity
{
    public static class IdentityResultExtensions
    {
        public static Result ToApplicationResult(this IdentityResult result)
        {
            return result.Succeeded
                ? Result.Success()
                : Result.Failure(result.Errors.Select(e => e.Description));
        }
    }
}