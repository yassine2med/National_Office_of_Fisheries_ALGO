using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Domain.Common;
using ACG.ONP.SIM.Domain.Options;
using ACG.ONP.SIM.RazorHtmlEmails.Areas.Emails.Views;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Options;
using MimeKit;

namespace ACG.ONP.SIM.RazorHtmlEmails.Services
{
    public class EmailSender : IEmailSender
    {
        private readonly EmailOptions _emailOptions;

        private readonly ITemplateToStringRenderer _templateToStringRenderer;
        //private readonly IIdentityService _identityService;

        public EmailSender(IOptions<EmailOptions> emailOptions,
            ITemplateToStringRenderer templateToStringRenderer /*,IIdentityService identityService*/)
        {
            _emailOptions = emailOptions.Value;
            _templateToStringRenderer = templateToStringRenderer;
            //_identityService = identityService;
        }

        public async Task SendEmailAsync<TModel>(string email, string subject, string template, TModel model,
            EmailAttachementFile emailAttachementFile = null)
        {
            await SendEmailAsync(new List<string> {email}, subject, template, model, emailAttachementFile);
        }


        public async Task SendEmailAsync<TModel>(List<string> emails, string subject, string template, TModel model,
            EmailAttachementFile emailAttachementFile = null)
        {
            try
            {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress(_emailOptions.SenderName, _emailOptions.Sender));
                message.To.AddRange(emails.Select(e => MailboxAddress.Parse(e)));
                message.Subject = subject;

                var builder = new BodyBuilder();

                builder.HtmlBody = await _templateToStringRenderer.RenderTemplateToStringAsync(
                    $"/Areas/Emails/Views/Templates/{template}.cshtml",
                    new TemplateViewModel<TModel>
                    {
                        Data = model
                    });

                if (emailAttachementFile != null)
                    builder.Attachments.Add(emailAttachementFile.FileName, emailAttachementFile.Data);

                message.Body = builder.ToMessageBody();

                using (var client = new SmtpClient())
                {
                    client.ServerCertificateValidationCallback = (s, c, h, e) => true;

                    await client.ConnectAsync(_emailOptions.MailServer, _emailOptions.MailPort, _emailOptions.UseSSL);
                    await client.AuthenticateAsync(_emailOptions.Sender, _emailOptions.Password);

                    await client.SendAsync(message);

                    await client.DisconnectAsync(true);
                }
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException(ex.Message);
            }
        }
    }
}