using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.RazorHtmlPdfPrint.Services;
using Microsoft.Extensions.DependencyInjection;
using Wkhtmltopdf.NetCore;

namespace ACG.ONP.SIM.RazorHtmlPdfPrint
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddRazorHtmlPdfPrint(this IServiceCollection services)
        {
            services.AddScoped<IPdfPrintService, PdfPrintService>();
            services.AddScoped<IExcelPrintService, ExcelPrintService>();
            services.AddWkhtmltopdf();

            return services;
        }
    }
}