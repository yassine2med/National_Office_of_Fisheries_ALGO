using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ACG.ONP.SIM.WebApi.Common.Controllers.Interfaces
{
    public interface IDeleteAction<TId>
    {
        Task<ActionResult> Delete(TId id);
    }
}