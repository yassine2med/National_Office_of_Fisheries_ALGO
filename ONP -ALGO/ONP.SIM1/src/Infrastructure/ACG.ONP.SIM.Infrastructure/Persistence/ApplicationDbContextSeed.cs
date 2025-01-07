using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ACG.ONP.SIM.Domain.Constants;
using ACG.ONP.SIM.Domain.Entities;
using ACG.ONP.SIM.Infrastructure.Identity.Entities;
using Bogus;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace ACG.ONP.SIM.Infrastructure.Persistence
{
    public static class ApplicationDbContextSeed
    {
        public static async Task SeedAll(IServiceProvider services, ApplicationDbContext dbContext)
        {
            await SeedCitiesAsync(dbContext);
            await SeedIdentityAsync(services, dbContext);
        }

        public static async Task SeedIdentityAsync(IServiceProvider services, ApplicationDbContext dbContext)
        {
            var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
            var roleManager = services.GetRequiredService<RoleManager<ApplicationRole>>();

            foreach (var roleField in typeof(AuthorizationConstants.Roles).GetFields())
            {
                var roleName = (string) roleField.GetValue(null);
                if (await roleManager.FindByNameAsync(roleName) == null)
                {
                    var result = await roleManager.CreateAsync(new ApplicationRole(roleName));
                    if (result.Succeeded)
                    {
                        var role = await roleManager.FindByNameAsync(roleName);
                        var permissions = SeedData.RolePermissions.GetValueOrDefault(roleName);

                        if (permissions != null)
                            foreach (var permission in permissions)
                                await roleManager.AddClaimAsync(role,
                                    new Claim(AuthorizationConstants.ClaimTypes.Permissions, permission));

                        await CreateUserAsync(userManager, roleManager, roleName);
                    }
                }
                //else
                //{
                //    {
                //        var role = await roleManager.FindByNameAsync(roleName);
                //        var permissions = SeedData.RolePermissions.GetValueOrDefault(roleName);

                //        if (permissions != null)
                //            foreach (var permission in permissions)
                //                await roleManager.AddClaimAsync(role, new Claim(AuthorizationConstants.ClaimTypes.Permissions, permission));
                //    }
                //}
            }

            await dbContext.SaveChangesAsync();
        }

        private static async Task CreateUserAsync(UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager, string roleName)
        {
            var username = roleName.ToLower().Remove(roleName.Length - 1);
            ApplicationUser user = new Faker<ApplicationUser>()
                .RuleFor(v => v.Id, f => Guid.NewGuid().ToString())
                .RuleFor(v => v.UserName, f => $"{username}@onp")
                .RuleFor(v => v.Email, f => $"{username}@onp.ma")
                .RuleFor(v => v.FirstName, f => f.Person.FirstName)
                .RuleFor(v => v.LastName, f => f.Person.LastName)
                .RuleFor(v => v.PhoneNumber, f => f.Person.Phone);

            var result = await userManager.CreateAsync(user, AuthorizationConstants.DefaultPassword);

            if (result.Succeeded)
            {
                user = await userManager.FindByNameAsync(user.UserName);
                if (user != null)
                    await userManager.AddToRoleAsync(user, roleName);
            }
        }

        public static async Task SeedCitiesAsync(ApplicationDbContext dbContext)
        {
            if (!dbContext.Cities.Any())
            {
                dbContext.Cities.AddRange(SeedData.Cities.Select(e => new City {Title = e}).ToList());

                await dbContext.SaveChangesAsync();
            }
        }
    }
}