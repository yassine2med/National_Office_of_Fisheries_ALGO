using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Commands;
using ACG.ONP.SIM.Application.Common.Mappings;
using ACG.ONP.SIM.Application.Common.Models;
using ACG.ONP.SIM.Application.Queries;
using ACG.ONP.SIM.Domain.Common;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ACG.ONP.SIM.WebApi.Common.Controllers
{
    [Authorize]
    public abstract class BaseDtoController<TEntity, TDto, TId> : ApiController
        where TEntity : BaseEntity<TId>
        where TDto : class, IMapTo<TEntity>
    {
        protected virtual async Task<ActionResult<PagedResult<TEntity>>> DoGet()
        {
            return await Mediator.Send(new GetAllDtoQuery<TEntity, TDto, TId>());
        }

        protected virtual async Task<ActionResult<PagedResult<TEntity>>> DoGet(int? page, int? size)
        {
            return await Mediator.Send(new GetAllDtoQuery<TEntity, TDto, TId> {Page = page, Size = size});
        }

        protected virtual async Task<ActionResult<TEntity>> DoGetById(TId id)
        {
            return await Mediator.Send(new GetDtoByIdQuery<TEntity, TDto, TId> {Id = id});
        }

        protected virtual async Task<ActionResult<TEntity>> DoCreate(TDto dto)
        {
            return await Mediator.Send(new CreateDtoCommand<TEntity, TDto, TId> {Data = dto});
        }

        protected virtual async Task<ActionResult<Unit>> DoUpdate(TId id, TDto dto)
        {
            return await Mediator.Send(new UpdateDtoCommand<TEntity, TDto, TId> {Id = id, Data = dto});
        }

        protected virtual async Task<ActionResult> DoDelete(TId id)
        {
            await Mediator.Send(new DeleteCommand<TEntity, TId> {Id = id});

            return NoContent();
        }
    }
}