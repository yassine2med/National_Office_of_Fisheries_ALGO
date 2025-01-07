using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Wkhtmltopdf.NetCore;

namespace ACG.ONP.SIM.WebApi.Common.Controllers
{
    [Route("[controller]")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public abstract class BasePdfController : Controller
    {
        private readonly IGeneratePdf _generatePdf;

        protected BasePdfController(IGeneratePdf generatePdf)
        {
            _generatePdf = generatePdf;
        }

        public async Task<IActionResult> GetPdf(string viewName, object viewModel)
        {
            return await _generatePdf.GetPdf($"Views/Pdf/{viewName}.cshtml", viewModel);
        }
    }
}