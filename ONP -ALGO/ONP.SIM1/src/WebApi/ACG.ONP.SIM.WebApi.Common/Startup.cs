using System.Collections.Generic;
using System.IO;
using System.Linq;
using ACG.ONP.SIM.Application;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Domain.Constants;
using ACG.ONP.SIM.Domain.Options;
using ACG.ONP.SIM.Infrastructure;
using ACG.ONP.SIM.Infrastructure.Persistence;
using ACG.ONP.SIM.RazorHtmlEmails;
using ACG.ONP.SIM.RazorHtmlPdfPrint;
using ACG.ONP.SIM.WebApi.Common.Converters;
using ACG.ONP.SIM.WebApi.Common.Filters;
using ACG.ONP.SIM.WebApi.Common.Middlewares;
using ACG.ONP.SIM.WebApi.Common.Services;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NSwag;
using NSwag.Generation.Processors.Security;

namespace ACG.ONP.SIM.WebApi.Common
{
    public class StartupBase
    {
        public StartupBase(IConfiguration configuration)
        {
            Configuration = configuration;
            var securityOptions = configuration.GetSection(ConfigurationConstants.Sections.Security)
                .Get<SecurityOptions>();
            Scope = securityOptions.Scope;
        }

        protected string Scope { get; set; }

        public IConfiguration Configuration { get; }

        protected virtual List<JsonConverter> GetConverters()

        {
            return new List<JsonConverter>();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public virtual void ConfigureServices(IServiceCollection services)
        {
            services.Configure<SecurityOptions>(Configuration.GetSection(ConfigurationConstants.Sections.Security));
            services.Configure<EmailOptions>(Configuration.GetSection(ConfigurationConstants.Sections.Mail));
            services.Configure<UrlsOptions>(Configuration.GetSection(ConfigurationConstants.Sections.PublicUrls));

            services.AddApplication();
            services.AddRazorHtmlEmails();
            services.AddRazorHtmlPdfPrint();
            services.AddInfrastructure(Configuration);

            services.AddScoped<ICurrentUserService, CurrentUserService>();

            services.AddSingleton<IFileProvider>(
                new PhysicalFileProvider(
                    Path.Combine(Directory.GetCurrentDirectory(), "wwwroot")));

            services.AddHttpContextAccessor();

            services.AddHealthChecks().AddDbContextCheck<ApplicationDbContext>();

            services.AddControllersWithViews(options =>
                {
                    options.Filters.Add(new ApiExceptionFilter());
                    //options.Filters.Add(new AuthorizeFilter(ScopePolicy.Create(Scope)));
                })
                .AddNewtonsoftJson(opts =>
                {
                    opts.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;

                    opts.SerializerSettings.Converters.Add(new StringEnumConverter());
                    opts.SerializerSettings.Converters.Add(new DecimalConverter());
                    foreach (var converter in GetConverters())
                        opts.SerializerSettings.Converters.Add(converter);
                });

            services.AddRouting(options => options.LowercaseUrls = true);
            services.AddRazorPages();

            // Customise default API behaviour
            services.Configure<ApiBehaviorOptions>(options => { options.SuppressModelStateInvalidFilter = true; });

            services.AddOpenApiDocument(configure =>
            {
                configure.Title = "ACG.ONP.SIM API";
                configure.AddSecurity("JWT", Enumerable.Empty<string>(), new OpenApiSecurityScheme
                {
                    Type = OpenApiSecuritySchemeType.ApiKey,
                    Name = "Authorization",
                    In = OpenApiSecurityApiKeyLocation.Header,
                    Description = "Type into the textbox: Bearer {your JWT token}."
                });

                configure.OperationProcessors.Add(new AspNetCoreOperationSecurityScopeProcessor("JWT"));
            });

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.WithOrigins("http://localhost:3000");
                    builder.WithOrigins("https://localhost:3000");

                    builder.WithOrigins("https://onpsim-bo.azurewebsites.net");
                    builder.WithOrigins("https://onpsim-fo.azurewebsites.net");

                    builder.WithOrigins("https://onpsim-bo-dev.azurewebsites.net");
                    builder.WithOrigins("https://onpsim-fo-dev.azurewebsites.net");

                    builder.WithOrigins("https://onpsim-bo-test.azurewebsites.net");
                    builder.WithOrigins("https://onpsim-fo-test.azurewebsites.net");

                    builder.WithOrigins("https://onpsim-bo-prod.azurewebsites.net");
                    builder.WithOrigins("https://onpsim-fo-prod.azurewebsites.net");

                    builder.WithOrigins("http://onpsim.ma");
                    builder.WithOrigins("http://www.onpsim.ma");
                    builder.WithOrigins("http://backoffice.onpsim.ma");

                    builder.WithOrigins("https://onpsim.ma");
                    builder.WithOrigins("https://www.onpsim.ma");
                    builder.WithOrigins("https://backoffice.onpsim.ma");

                    builder.AllowAnyHeader();
                    builder.AllowAnyMethod();
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public virtual void Configure(IApplicationBuilder app, IWebHostEnvironment env, IAntiforgery antiforgery)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                //app.UseSwaggerUi3(settings =>
                //{
                //    settings.Path = "/api";
                //    settings.DocumentPath = "/api/specification.json";
                //});
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


            app.UseRouting();

            app.UseCors();

            app.UseBasicAuthentication();
            app.UseJwtQueryAccessToken();
            app.UseAuthentication();
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