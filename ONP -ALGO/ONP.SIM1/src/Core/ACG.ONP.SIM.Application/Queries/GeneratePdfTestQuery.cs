using System.Threading;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Interfaces;
using MediatR;

namespace ACG.ONP.SIM.Application.Queries
{
    public class GeneratePdfTestQuery : IRequest<byte[]>
    {
    }


    public class GeneratePdfTestQueryHandler : IRequestHandler<GeneratePdfTestQuery, byte[]>
    {
        private readonly IPdfPrintService _pdfPrintService;

        public GeneratePdfTestQueryHandler(IPdfPrintService pdfPrintService)
        {
            _pdfPrintService = pdfPrintService;
        }

        public async Task<byte[]> Handle(GeneratePdfTestQuery request,
            CancellationToken cancellationToken)
        {
            return await _pdfPrintService.GeneratePdf("Test", "test pdf");
        }
    }
}