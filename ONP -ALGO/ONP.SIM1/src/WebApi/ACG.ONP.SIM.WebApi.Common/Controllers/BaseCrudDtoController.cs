using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Mappings;
using ACG.ONP.SIM.Application.Common.Models;
using ACG.ONP.SIM.Domain.Common;
using ACG.ONP.SIM.WebApi.Common.Controllers.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ACG.ONP.SIM.WebApi.Common.Controllers
{
    [Authorize]
    public abstract class BaseCrudDtoController<TEntity, TDto, TId> : BaseDtoController<TEntity, TDto, TId>,
        IGetAction<TEntity, TId>,
        IGetByIdAction<TEntity, TId>,
        ICreateAction<TEntity, TDto, TId>,
        IUpdateAction<TEntity, TDto, TId>,
        IDeleteAction<TId>
        where TEntity : BaseEntity<TId>
        where TDto : class, IMapTo<TEntity>
    {
        [HttpPost]
        public Task<ActionResult<TEntity>> Create(TDto dto)
        {
            return DoCreate(dto);
        }

        [HttpDelete("{id}")]
        public Task<ActionResult> Delete(TId id)
        {
            return DoDelete(id);
        }

        [HttpGet]
        public Task<ActionResult<PagedResult<TEntity>>> Get(int? page, int? size)
        {
            return DoGet(page, size);
        }

        [HttpGet("{id}")]
        public Task<ActionResult<TEntity>> GetById(TId id)
        {
            return DoGetById(id);
        }

        [HttpPut("{id}")]
        public Task<ActionResult<Unit>> Update(TId id, TDto dto)
        {
            return DoUpdate(id, dto);
        }
    }
}