using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Models;
using ACG.ONP.SIM.Domain.Common;
using Microsoft.AspNetCore.Mvc;

namespace ACG.ONP.SIM.WebApi.Common.Controllers.Interfaces
{
    public interface IGetAction<TEntity, TId>
        where TEntity : BaseEntity<TId>
    {
        Task<ActionResult<PagedResult<TEntity>>> Get(int? page, int? size);
    }
}