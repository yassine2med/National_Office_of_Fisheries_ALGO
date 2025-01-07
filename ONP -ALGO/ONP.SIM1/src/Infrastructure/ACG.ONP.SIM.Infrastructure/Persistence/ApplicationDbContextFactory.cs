using System;
using System.IO;
using System.Reflection;
using ACG.ONP.SIM.Infrastructure.Services;
using IdentityServer4.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace ACG.ONP.SIM.Infrastructure.Persistence
{
    public class OperationalStoreOptionsMigrations :
        IOptions<OperationalStoreOptions>
    {
        public OperationalStoreOptions Value => new OperationalStoreOptions
        {
            DeviceFlowCodes = new TableConfiguration("DeviceCodes"),
            EnableTokenCleanup = false,
            PersistedGrants = new TableConfiguration("PersistedGrants"),
            TokenCleanupBatchSize = 100,
            TokenCleanupInterval = 3600
        };
    }


    public class ApplicationDbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
    {
        public ApplicationDbContext CreateDbContext(string[] args)
        {
            var configurationRoot = GetConfigurationRoot();
            var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
            if (configurationRoot.GetValue<bool>("UsePgSql"))
                optionsBuilder.UseNpgsql(configurationRoot.GetConnectionString(nameof(ApplicationDbContext)),
                    b => b.MigrationsAssembly(Assembly.GetAssembly(typeof(ApplicationDbContext))?.GetName().FullName));
            else
                optionsBuilder.UseSqlServer(configurationRoot.GetConnectionString(nameof(ApplicationDbContext)),
                    b => b.MigrationsAssembly(Assembly.GetAssembly(typeof(ApplicationDbContext))?.GetName().FullName));

            return new ApplicationDbContext(optionsBuilder.Options, new OperationalStoreOptionsMigrations(), null,
                new DateTimeService(), new BlobStorage(configurationRoot.GetConnectionString("AzureBlobStorage")));
        }

        public ApplicationDbContext CreateDbContext()
        {
            return CreateDbContext(new string[] { });
        }

        public static IConfigurationRoot GetConfigurationRoot()
        {
            var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production";
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../ACG.ONP.SIM.WebApi.Common"))
                .AddJsonFile("appsettings-common.json", false, true)
                .AddJsonFile($"appsettings-common.{environment}.json", true)
                .AddEnvironmentVariables("ASPNETCOREAUTOHALLVO_")
                .Build();

            return configuration;
        }
    }
}