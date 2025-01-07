using System.Collections.Generic;
using System.Threading.Tasks;
using ACG.ONP.SIM.Domain.Common;

namespace ACG.ONP.SIM.Application.Common.Interfaces
{
    public interface IEmailSender
    {
        Task SendEmailAsync<TModel>(string email, string subject, string template, TModel model,
            EmailAttachementFile emailAttachementFile = null);

        Task SendEmailAsync<TModel>(List<string> emails, string subject, string template, TModel model,
            EmailAttachementFile emailAttachementFile = null);
    }
}