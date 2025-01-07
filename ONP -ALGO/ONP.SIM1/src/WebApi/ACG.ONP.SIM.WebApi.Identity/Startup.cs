using System.Linq;
using ACG.AutoHall.VO.WebUI.Identity.Areas.Identity;
using ACG.ONP.SIM.Application;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Domain.Constants;
using ACG.ONP.SIM.Domain.Options;
using ACG.ONP.SIM.Infrastructure;
using ACG.ONP.SIM.Infrastructure.Identity.Entities;
using ACG.ONP.SIM.Infrastructure.Persistence;
using ACG.ONP.SIM.RazorHtmlEmails;
using ACG.ONP.SIM.RazorHtmlPdfPrint;
using ACG.ONP.SIM.WebApi.Common.Filters;
using ACG.ONP.SIM.WebApi.Common.Services;
using ACG.ONP.SIM.WebApi.Identity.Services;
using ACG.ONP.SIM.WebApi.Identity.Stores;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace ACG.ONP.SIM.WebApi.Identity
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<UrlsOptions>(Configuration.GetSection(ConfigurationConstants.Sections.PublicUrls));

            services.AddSession();
            services.AddApplication();
            services.AddRazorHtmlEmails();
            services.AddRazorHtmlPdfPrint();
            services.AddInfrastructure(Configuration, true);

            services.AddIdentityServer(options =>
                {
                    //options.Authentication.CookieLifetime = TimeSpan.Zero;
                    options.Discovery.CustomEntries.Add("local_api", "~/localapi");
                })
                .AddApiAuthorization<ApplicationUser, ApplicationDbContext>(options =>
                {
                    options.ApiResources.AddRange(ApiResourceProvider.GetAllApiResources().ToArray());
                    options.Clients.AddRange(ApiClientStore.GetAllClients().ToArray());
                });

            services.AddLocalApiAuthentication();

            services.AddAuthentication()
                .AddIdentityServerJwt();

            services.AddScoped<IProfileService, ProfileService>();
            services.AddScoped<ICurrentUserService, CurrentUserService>();
            services.AddScoped<IOidClientService, OidClientService>();
            services.AddTransient<IdentityErrorDescriber, CustomIdentityErrorDescriber>();
            services.AddHttpContextAccessor();

            services.AddHealthChecks().AddDbContextCheck<ApplicationDbContext>();

            services.AddControllersWithViews(options =>
                options.Filters.Add(new ApiExceptionFilter()));

            services.AddRazorPages();

            var loggerFactory = LoggerFactory.Create(builder => { builder.AddConsole(); });

            string[] origins =
            {
                "http://localhost:3000",
                "https://localhost:3000",

                "http://onpsim-pmpi.azurewebsites.net",
                "https://onpsim-pmpi.azurewebsites.net",
                "https://onpsim-pmpi-api.azurewebsites.net",

                "https://onpsim-pmpi-dev.azurewebsites.net",
                "https://onpsim-pmpi-api-dev.azurewebsites.net",

                "https://onpsim-pmpi-test.azurewebsites.net",
                "https://onpsim-pmpi-api-test.azurewebsites.net",

                "https://onpsim-pmpi-prod.azurewebsites.net",
                "https://onpsim-pmpi-api-prod.azurewebsites.net",

                "http://onpsim.ma",
                "http://www.onpsim.ma",
                "http://api.onpsim.ma",

                "https://onpsim.ma",
                "https://www.onpsim.ma",
                "https://api.onpsim.ma",

                "http://pmpi.onpsim.ma",
                "http://pmpi-api.onpsim.ma",

                "https://pmpi.onpsim.ma",
                "https://pmpi-api.onpsim.ma"
            };
            var cors = new DefaultCorsPolicyService(loggerFactory.CreateLogger<DefaultCorsPolicyService>())
            {
                AllowedOrigins = origins
            };

            services.AddSingleton<ICorsPolicyService>(cors);

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.WithOrigins(origins);
                    builder.AllowAnyHeader();
                    builder.AllowAnyMethod();
                });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHealthChecks("/health");
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSession();

            app.UseRouting();

            app.UseCors();

            app.UseAuthentication();
            app.UseIdentityServer();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    "default",
                    "{controller}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });
        }
    }
}