using System.Drawing;
using System.IO;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Domain.Options;
using ACG.ONP.SIM.RazorHtmlPdfPrint.Areas.Reports;
using iText.Html2pdf;
using iText.Kernel.Colors;
using iText.Kernel.Events;
using iText.Kernel.Geom;
using iText.Kernel.Pdf;
using iText.Kernel.Pdf.Canvas;
using iText.Kernel.Pdf.Xobject;
using iText.Layout;
using iText.Layout.Element;
using iText.Layout.Properties;
using Microsoft.Extensions.Options;
using QRCoder;
using Wkhtmltopdf.NetCore;
using Wkhtmltopdf.NetCore.Options;
using Rectangle = iText.Kernel.Geom.Rectangle;

namespace ACG.ONP.SIM.RazorHtmlPdfPrint.Services
{
    public class PdfPrintService : IPdfPrintService
    {
        private readonly IGeneratePdf _generatePdf;
        private readonly PrintFooterOptions _printFooterText;
        private readonly ITemplateToStringRenderer _templateToStringRenderer;

        public PdfPrintService(IOptions<PrintFooterOptions> printFooterText,
            ITemplateToStringRenderer templateToStringRenderer, IGeneratePdf generatePdf)
        {
            _printFooterText = printFooterText.Value;
            _templateToStringRenderer = templateToStringRenderer;
            _generatePdf = generatePdf;
        }

        public async Task<byte[]> GeneratePdf<TModel>(string template, TModel model, bool isLandscape = false,
            bool isImageBased = false, bool useWkhtmltopdf = false)
        {
            var html = await _templateToStringRenderer.RenderTemplateToStringAsync(
                $"/Areas/Reports/Views/Templates/{template}.cshtml",
                new PdfViewModel<TModel>
                {
                    Data = model,
                    IsReport = isLandscape,
                    isImagebased = isImageBased
                });

            var workStream = new MemoryStream();

            if (useWkhtmltopdf)
            {
                if (isLandscape)
                    _generatePdf.SetConvertOptions(new ConvertOptions
                    {
                        PageOrientation = Orientation.Landscape,
                        PageMargins = new Margins(4, 4, 4, 4)
                    });
                var pdf = _generatePdf.GetPDF(html);
                workStream.Write(pdf, 0, pdf.Length);
                workStream.Position = 0;
            }
            else
            {
                var converterProperties = new ConverterProperties();

                using (var pdfWriter = new PdfWriter(workStream))
                {
                    var pdfDocument = new PdfDocument(pdfWriter);
                    if (isLandscape)
                    {
                        pdfDocument.SetDefaultPageSize(PageSize.A4.Rotate());
                    }
                    else if (!isImageBased)
                    {
                        pdfDocument.AddEventHandler(PdfDocumentEvent.END_PAGE, new Footer(_printFooterText));
                        pdfDocument.SetDefaultPageSize(PageSize.A4);
                    }

                    pdfWriter.SetCloseStream(false);

                    HtmlConverter.ConvertToPdf(html, pdfDocument, converterProperties);
                }
            }

            return workStream.ToArray();
        }


        public byte[] GenerateQRCode(string text)
        {
            var qrGenerator = new QRCodeGenerator();
            var qrCodeData = qrGenerator.CreateQrCode(text, QRCodeGenerator.ECCLevel.Q);
            var qrCode = new QRCode(qrCodeData);

            var converter = new ImageConverter();

            return (byte[]) converter.ConvertTo(qrCode.GetGraphic(8), typeof(byte[]));
        }
    }


    // Footer event handler
    public class Footer : IEventHandler
    {
        private readonly PrintFooterOptions _printFooterText;
        protected float descent = 3;
        protected PdfFormXObject placeholder;
        protected float side = 20;
        protected float space = 4.5f;
        protected float x = 300;
        protected float y = 20;

        public Footer(PrintFooterOptions printFooterText)
        {
            _printFooterText = printFooterText;
            placeholder = new PdfFormXObject(new Rectangle(0, 0, side, side));
        }

        public virtual void HandleEvent(Event @event)
        {
            var docEvent = (PdfDocumentEvent) @event;
            var page = docEvent.GetPage();
            var pageSize = page.GetPageSize();

            // Creates drawing canvas
            var pdfCanvas = new PdfCanvas(page);
            var canvas = new Canvas(pdfCanvas, pageSize);

            var pStyle = new Style();
            pStyle.SetFontColor(ColorConstants.LIGHT_GRAY);
            pStyle.SetFontSize(8);
            var p = new Paragraph()
                .Add(_printFooterText.LineOne)
                .AddStyle(pStyle);
            var p2 = new Paragraph()
                .Add(_printFooterText.LineTwo)
                .AddStyle(pStyle);
            ;

            var p2Style = new Style();
            p2Style.SetFontSize(8);
            p2Style.SetFontColor(new DeviceRgb(3, 120, 74));
            var p3 = new Paragraph()
                .Add(_printFooterText.LineThree)
                .AddStyle(p2Style);

            canvas.ShowTextAligned(p3, x, y, TextAlignment.CENTER);
            canvas.ShowTextAligned(p2, x, y + 15, TextAlignment.CENTER);
            canvas.ShowTextAligned(p, x, y + 30, TextAlignment.CENTER);
            canvas.Close();

            pdfCanvas.Release();
        }
    }
}