using System.Collections.Generic;
using ACG.ONP.SIM.Domain.Constants;
using ACG.ONP.SIM.Domain.Options;
using ACG.ONP.SIM.WebApi.Common;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;

namespace ACG.ONP.SIM.WebApi.BO
{
    /// <summary>
    /// </summary>
    public class Startup : StartupBase
    {
        /// <summary>
        /// </summary>
        /// <param name="configuration"></param>
        public Startup(IConfiguration configuration) : base(configuration)
        {
        }

        /// <summary>
        /// </summary>
        /// <param name="services"></param>
        public override void ConfigureServices(IServiceCollection services)
        {
            services.Configure<PrintFooterOptions>(
                Configuration.GetSection(ConfigurationConstants.Sections.PrintFooterText));

            base.ConfigureServices(services);
        }

        /// <summary>
        /// </summary>
        /// <returns></returns>
        protected override List<JsonConverter> GetConverters()
        {
            var converters = base.GetConverters();

            return converters;
        }
    }
}