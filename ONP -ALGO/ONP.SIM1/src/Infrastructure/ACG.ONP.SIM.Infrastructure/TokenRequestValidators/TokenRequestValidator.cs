using System.Threading.Tasks;
using IdentityServer4.Validation;

namespace ACG.ONP.SIM.Infrastructure.TokenRequestValidators
{
    public class TokenRequestValidator : ICustomTokenRequestValidator
    {
        public Task ValidateAsync(CustomTokenRequestValidationContext context)
        {
            return Task.CompletedTask;
        }
    }
}