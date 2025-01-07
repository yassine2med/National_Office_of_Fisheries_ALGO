using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;

namespace ACG.ONP.SIM.WebApi.Common
{
    public abstract class ProgramBase<TStartup> where TStartup : StartupBase
    {
        protected virtual async Task RunAsync(string[] args)
        {
            var host = DoCreateHostBuilder(args).Build();

            await host.RunAsync();
        }

        protected virtual IHostBuilder DoCreateHostBuilder(string[] args)
        {
            var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Development";

            return Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((hostingContext, config) =>
                {
                    var env = hostingContext.HostingEnvironment;
                    var commonDir = Path.Combine(env.ContentRootPath, "..", "ACG.ONP.SIM.WebApi.Common");

                    config.AddJsonFile(Path.Combine(commonDir, "appsettings-common.json"), true, true);
                    config.AddJsonFile(Path.Combine(commonDir, $"appsettings-common.{environment}.json"), true);
                    config.AddJsonFile("appsettings-common.json", true, true);
                    config.AddJsonFile($"appsettings-common.{environment}.json", true);
                    config.AddJsonFile("appsettings.json", false, true);
                    config.AddJsonFile($"appsettings.{environment}.json", true);
                    config.AddEnvironmentVariables();
                })
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<TStartup>(); });
        }
    }
}