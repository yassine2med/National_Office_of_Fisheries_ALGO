using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Exceptions;
using ACG.ONP.SIM.Application.Common.Extensions;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Application.Common.Models;
using ACG.ONP.SIM.Domain.Constants;
using ACG.ONP.SIM.Domain.Entities;
using ACG.ONP.SIM.Domain.Entities.Criterias;
using ACG.ONP.SIM.Infrastructure.Identity.Entities;
using ACG.ONP.SIM.Infrastructure.Persistence;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace ACG.ONP.SIM.Infrastructure.Identity
{
    public class IdentityService : IIdentityService
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IEmailSender _emailSender;
        private readonly IMapper _mapper;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly UserManager<ApplicationUser> _userManager;


        public IdentityService(UserManager<ApplicationUser> userManager, ApplicationDbContext dbContext, IMapper mapper,
            IEmailSender emailSender, RoleManager<ApplicationRole> roleManager)
        {
            _userManager = userManager;
            _dbContext = dbContext;
            _mapper = mapper;
            _emailSender = emailSender;
            _roleManager = roleManager;
        }

        public async Task<string> GetUserNameAsync(string userId)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.Id == userId);

            return user?.UserName;
        }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
                throw new NotFoundException(nameof(User), email);

            return _mapper.Map<User>(user);
        }

        public async Task<List<string>> GetUserClaimsAsync(string userId, string claimType)
        {
            var claimes = new List<string>();

            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
                return claimes;

            claimes.AddRange((await _userManager.GetClaimsAsync(user)).Select(e => e.Value).ToList());

            var roleNames = await _userManager.GetRolesAsync(user);

            foreach (var roleName in roleNames)
                claimes.AddRange((await _roleManager.GetClaimsAsync(await _roleManager.FindByNameAsync(roleName)))
                    .Select(e => e.Value).ToList());

            return claimes;
        }

        public async Task<(Result Result, string UserId)> CreateUserAsync(string userName, string password)
        {
            var user = new ApplicationUser
            {
                UserName = userName,
                Email = userName
            };

            var result = await _userManager.CreateAsync(user, password);

            return (result.ToApplicationResult(), user.Id);
        }

        public Task<User> GetUserByIdAsync(string userId)
        {
            var user = _dbContext.Users.Where(e => e.Id == userId)
                .ProjectTo<User>(_mapper.ConfigurationProvider)
                .FirstOrDefault();

            return Task.FromResult(user);
        }

        public Task<PagedResult<User>> GetUsersAsync(int? page, int? size, UserCriteria criteria)
        {
            var userQuery = _dbContext.ApplySpecification(new UserSearchSpecification(criteria));

            var users = userQuery
                .ProjectTo<User>(_mapper.ConfigurationProvider)
                .OrderByDescending(t => t.Created)
                .GetPaged(page.GetValueOrDefault(1),
                    size.GetValueOrDefault(CoreConstants.DefaultPageSize));

            return users;
        }


        public async Task<Result> ChangePasswordAsync(string userId, string oldPassword, string newPassword)
        {
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
                throw new NotFoundException(nameof(User), userId);

            var result = await _userManager.ChangePasswordAsync(user, oldPassword, newPassword);

            return result.ToApplicationResult();
        }

        public async Task<List<User>> GetUserByRolesAsync(List<string> roles)
        {
            var users = new List<User>();

            foreach (var role in roles)
            {
                var roleuser = _mapper.Map<List<User>>(await _userManager.GetUsersInRoleAsync(role));
                roleuser.ForEach(r => r.RoleName = role);
                users.AddRange(roleuser);
            }

            return users;
        }
    }
}