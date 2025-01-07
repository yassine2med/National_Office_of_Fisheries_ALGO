using System.Collections.Generic;
using MediatR.Behaviors.Authorization;

namespace ACG.ONP.SIM.Application.Common.Authorizations
{
    public abstract class AbstractRoleBasedAuthorizer<TRequest> : AbstractRequestAuthorizer<TRequest>
    {
        protected abstract List<string> GetAllowedRoles();

        public override void BuildPolicy(TRequest request)
        {
            UseRequirement(new MustHaveRoleRequirement
            {
                RoleNames = GetAllowedRoles()
            });
        }
    }
}