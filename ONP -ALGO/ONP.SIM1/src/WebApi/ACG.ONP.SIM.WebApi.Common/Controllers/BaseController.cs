﻿using System;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Commands;
using ACG.ONP.SIM.Application.Common.Models;
using ACG.ONP.SIM.Application.Queries;
using ACG.ONP.SIM.Domain.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ACG.ONP.SIM.WebApi.Common.Controllers
{
    [Authorize]
    public abstract class BaseController<TEntity, TId> : ApiController
        where TEntity : class, IDeletableEntity, IAuditableEntity<string>
    {
        protected virtual async Task<ActionResult<PagedResult<TEntity>>> DoGet(int? page, int? size)
        {
            return await Mediator.Send(new GetAllQuery<TEntity, TId> {Page = page, Size = size});
        }

        protected virtual async Task<ActionResult<TEntity>> DoGetById(TId id)
        {
            return await Mediator.Send(new GetByIdQuery<TEntity, TId> {Id = id});
        }

        protected virtual async Task<ActionResult<TEntity>> DoCreate(TEntity entity)
        {
            return await Mediator.Send(new CreateCommand<TEntity, TId> {Data = entity});
        }

        protected virtual Task<ActionResult> DoUpdate(TId id, TEntity entity)
        {
            throw new NotImplementedException();
        }

        protected virtual async Task<ActionResult> DoDelete(TId id)
        {
            await Mediator.Send(new DeleteCommand<TEntity, TId> {Id = id});

            return NoContent();
        }
    }
}