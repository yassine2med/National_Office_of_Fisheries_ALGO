using System.Reflection;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Application.Common.Mappings;
using ACG.ONP.SIM.Domain.Constants;
using ACG.ONP.SIM.Domain.Options;
using ACG.ONP.SIM.Infrastructure.Identity;
using ACG.ONP.SIM.Infrastructure.Identity.Entities;
using ACG.ONP.SIM.Infrastructure.Identity.Stores;
using ACG.ONP.SIM.Infrastructure.Persistence;
using ACG.ONP.SIM.Infrastructure.Services;
using AutoMapper;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ACG.ONP.SIM.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services,
            IConfiguration configuration, bool configureIdentityServer = false)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly(), Assembly.GetAssembly(typeof(IMapFrom<>)));

            services.Configure<EmailOptions>(configuration.GetSection(ConfigurationConstants.Sections.Mail));

            if (configuration.GetValue<bool>("UsePgSql"))
                services.AddDbContext<ApplicationDbContext>(options =>
                    options.UseNpgsql(
                        configuration.GetConnectionString(nameof(ApplicationDbContext)),
                        b => b.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName)));
            else
                services.AddDbContext<ApplicationDbContext>(options =>
                    options.UseSqlServer(
                            configuration.GetConnectionString(nameof(ApplicationDbContext)),
                            b => b.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName))
                        .AddInterceptors(new DbCommandInterceptor()));

            services.AddScoped<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext>());

            services.AddDefaultIdentity<ApplicationUser>()
                .AddRoles<ApplicationRole>()
                .AddRoleManager<RoleManager<ApplicationRole>>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddUserStore<ApplicationUserStore>()
                .AddRoleStore<ApplicationRoleStore>()
                .AddClaimsPrincipalFactory<ApplicationUserClaimsPrincipalFactory>();

            if (!configureIdentityServer)
            {
                var securityOptions = configuration.GetSection(ConfigurationConstants.Sections.Security)
                    .Get<SecurityOptions>();
                services.AddAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme)
                    .AddIdentityServerAuthentication(options =>
                    {
                        options.Authority = securityOptions.AuthorityUrl;
                        options.ApiName = securityOptions.Scope;
                    });
            }

            services.AddTransient<IDateTime, DateTimeService>();
            services.AddTransient<IMediaService, MediaService>();
            services.AddTransient<IIdentityService, IdentityService>();
            services.AddSingleton<IStorage>(new LocalStorage());
            // services.AddSingleton<IStorage>(new BlobStorage(configuration.GetConnectionString("AzureBlobStorage")));
            services.AddStackExchangeRedisCache(options =>
            {
                options.Configuration = configuration.GetConnectionString("AzureRedisCache");
            });
            services.AddTransient<ICacheService, CacheService>();

            return services;
        }
    }
}