using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Models;
using ACG.ONP.SIM.Domain.Common;
using ACG.ONP.SIM.WebApi.Common.Controllers.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ACG.ONP.SIM.WebApi.Common.Controllers
{
    [Authorize]
    public abstract class BaseReadOnlyController<TEntity, TId> : BaseController<TEntity, TId>,
        IGetAction<TEntity, TId>,
        IGetByIdAction<TEntity, TId>
        where TEntity : BaseEntity<TId>
    {
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
    }
}