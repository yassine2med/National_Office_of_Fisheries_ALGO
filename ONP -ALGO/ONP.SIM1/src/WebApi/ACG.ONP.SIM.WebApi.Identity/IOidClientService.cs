namespace ACG.ONP.SIM.WebApi.Identity
{
    public interface IOidClientService
    {
        public bool ExternalAuthenticationEnabled { get; }
        public bool PublicRegistrationEnabled { get; }
        public void SetReturnUrl(string returnUrl);
    }
}