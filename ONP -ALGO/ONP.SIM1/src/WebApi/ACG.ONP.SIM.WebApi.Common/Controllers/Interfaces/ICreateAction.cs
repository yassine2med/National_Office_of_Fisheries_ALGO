using System.Threading.Tasks;
using ACG.ONP.SIM.Domain.Common;
using Microsoft.AspNetCore.Mvc;

namespace ACG.ONP.SIM.WebApi.Common.Controllers.Interfaces
{
    public interface ICreateAction<TEntity, TDto, TId>
        where TEntity : BaseEntity<TId>
        where TDto : class
    {
        Task<ActionResult<TEntity>> Create(TDto dto);
    }
}