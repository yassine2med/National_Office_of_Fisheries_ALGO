using System.Threading.Tasks;
using ACG.ONP.SIM.Domain.Common;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ACG.ONP.SIM.WebApi.Common.Controllers.Interfaces
{
    public interface IUpdateAction<TEntity, TDto, TId>
        where TEntity : BaseEntity<TId>
        where TDto : class
    {
        Task<ActionResult<Unit>> Update(TId id, TDto dto);
    }
}