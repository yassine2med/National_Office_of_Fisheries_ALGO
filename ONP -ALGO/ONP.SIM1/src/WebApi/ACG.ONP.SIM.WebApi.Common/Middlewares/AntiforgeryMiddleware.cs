using System;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace ACG.ONP.SIM.WebApi.Common.Middlewares
{
    public class AntiforgeryMiddleware
    {
        private readonly IAntiforgery _antiForgery;
        private readonly RequestDelegate _next;

        public AntiforgeryMiddleware(RequestDelegate next, IAntiforgery antiForgery)
        {
            _next = next;
            _antiForgery = antiForgery;
        }

        public Task Invoke(HttpContext context)
        {
            return BeginInvoke(context);
        }

        private Task BeginInvoke(HttpContext context)
        {
            var path = context.Request.Path.Value;


            if (Regex.IsMatch(path, "^/api/Resources$", RegexOptions.IgnoreCase) &&
                string.Equals(context.Request.Method, "GET", StringComparison.OrdinalIgnoreCase))
            {
                var tokens = _antiForgery.GetAndStoreTokens(context);

                context.Response.Cookies.Append("XSRF-TOKEN", tokens.RequestToken,
                    new CookieOptions {HttpOnly = false});
            }

            return _next.Invoke(context);
        }
    }

    public static class AntiforgeryMiddlewareExtensions
    {
        public static IApplicationBuilder UseAntiforgery(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<AntiforgeryMiddleware>();
        }
    }
}