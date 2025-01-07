using System;
using ACG.ONP.SIM.Infrastructure.Identity.Entities;
using ACG.ONP.SIM.Infrastructure.Persistence;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: HostingStartup(typeof(ACG.ONP.SIM.WebApi.Identity.Areas.Identity.IdentityHostingStartup))]
namespace ACG.ONP.SIM.WebApi.Identity.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
            });
        }
    }
}