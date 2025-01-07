namespace ACG.ONP.SIM.RazorHtmlPdfPrint.Areas.Reports
{
    public class PdfViewModel<T>
    {
        public T Data { get; set; }
        public bool IsReport { get; set; } = false;
        public bool isImagebased { get; set; } = false;
    }
}