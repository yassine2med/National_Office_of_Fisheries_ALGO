using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.RazorHtmlEmails.Services;
using Microsoft.Extensions.DependencyInjection;

namespace ACG.ONP.SIM.RazorHtmlEmails
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddRazorHtmlEmails(this IServiceCollection services)
        {
            services.AddScoped<ITemplateToStringRenderer, RazorViewToStringRenderer>();
            services.AddScoped<IEmailSender, EmailSender>();

            return services;
        }
    }
}