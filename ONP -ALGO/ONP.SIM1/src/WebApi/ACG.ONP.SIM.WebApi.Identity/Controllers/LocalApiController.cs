using IdentityServer4;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ACG.ONP.SIM.WebApi.Identity.Controllers
{
    [Route("localApi")]
    [Authorize(IdentityServerConstants.LocalApi.PolicyName)]
    public class LocalApiController : ControllerBase
    {
        public IActionResult Get()
        {
            return Ok();
        }
    }
}