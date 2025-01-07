﻿using System;
using System.Collections.Generic;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Domain.Constants;
using MediatR.Behaviors.Authorization;

namespace ACG.ONP.SIM.Application.Common.Authorizations
{
    public class QueryCommandBasedAuthorizer<TRequest> : AbstractRequestAuthorizer<TRequest>
    {
        private readonly ICurrentUserService _currentUserService;

        public QueryCommandBasedAuthorizer(ICurrentUserService currentUserService)
        {
            _currentUserService = currentUserService;
        }

        public override void BuildPolicy(TRequest request)
        {
            var attribute = Attribute.GetCustomAttribute(typeof(TRequest), typeof(AnonymousAccessAttribute));
            if (attribute == null &&
                !_currentUserService.RoleNames.Contains(AuthorizationConstants.Roles.Administrators))
                UseRequirement(new MustHavePermissionRequirement
                {
                    Permissions = new List<string> {GetPermissionFromRequest()}
                });
        }

        protected string GetPermissionFromRequest()
        {
            return $"Can{typeof(TRequest).Name.Replace("Query", "").Replace("Command", "")}";
        }
    }
}