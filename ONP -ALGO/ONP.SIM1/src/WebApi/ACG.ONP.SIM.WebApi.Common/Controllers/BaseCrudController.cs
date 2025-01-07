using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Models;
using ACG.ONP.SIM.Domain.Common;
using ACG.ONP.SIM.WebApi.Common.Controllers.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ACG.ONP.SIM.WebApi.Common.Controllers
{
    [Authorize]
    public abstract class BaseCrudController<TEntity, TId> : BaseController<TEntity, TId>,
        IGetAction<TEntity, TId>,
        IGetByIdAction<TEntity, TId>,
        ICreateAction<TEntity, TEntity, TId>,
        IUpdateAction<TEntity, TEntity, TId>,
        IDeleteAction<TId>
        where TEntity : BaseEntity<TId>
    {
        [HttpPost]
        public Task<ActionResult<TEntity>> Create(TEntity entity)
        {
            return DoCreate(entity);
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
        public async Task<ActionResult<Unit>> Update(TId id, TEntity entity)
        {
            return await DoUpdate(id, entity);
        }
    }
}