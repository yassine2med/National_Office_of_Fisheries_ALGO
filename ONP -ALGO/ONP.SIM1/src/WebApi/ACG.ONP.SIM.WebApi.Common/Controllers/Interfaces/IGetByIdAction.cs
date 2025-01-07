using System.Threading.Tasks;
using ACG.ONP.SIM.Domain.Common;
using Microsoft.AspNetCore.Mvc;

namespace ACG.ONP.SIM.WebApi.Common.Controllers.Interfaces
{
    public interface IGetByIdAction<TEntity, TId>
        where TEntity : BaseEntity<TId>
    {
        Task<ActionResult<TEntity>> GetById(TId id);
    }
}