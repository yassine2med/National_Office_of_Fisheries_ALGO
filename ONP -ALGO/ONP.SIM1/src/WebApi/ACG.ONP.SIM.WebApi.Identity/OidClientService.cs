using IdentityServer4.Models;
using IdentityServer4.Services;

namespace ACG.ONP.SIM.WebApi.Identity
{
    public class OidClientService : IOidClientService
    {
        private readonly IIdentityServerInteractionService _interactionService;
        private AuthorizationRequest _context;

        public OidClientService(IIdentityServerInteractionService interactionService)
        {
            _interactionService = interactionService;
        }

        public bool ExternalAuthenticationEnabled => false;

        public bool PublicRegistrationEnabled => false;

        public async void SetReturnUrl(string returnUrl)
        {
            _context = await _interactionService.GetAuthorizationContextAsync(returnUrl);
        }
    }
}