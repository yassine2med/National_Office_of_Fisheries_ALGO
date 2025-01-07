using ACG.ONP.SIM.Domain.Entities;

namespace ACG.ONP.SIM.RazorHtmlEmails.Areas.Emails.Views
{
    public class TemplateViewModel<T>
    {
        public User User { get; set; }
        public T Data { get; set; }
    }
}