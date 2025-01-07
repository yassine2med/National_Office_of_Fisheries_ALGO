using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using ACG.ONP.SIM.Domain.Enums;
using ACG.ONP.SIM.Domain.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ACG.ONP.SIM.WebApi.Common.Controllers
{
    /// <summary>
    ///     Resources values/description
    /// </summary>
    public class ResourcesController : ApiController
    {
        /// <summary>
        ///     Resources values/description list
        /// </summary>
        /// <returns></returns>
        [IgnoreAntiforgeryToken]
        [AllowAnonymous]
        [HttpGet]
        public ActionResult<IDictionary<string, IDictionary<string, string>>> Get()
        {
            var assembly = typeof(DocumentType).Assembly;
            var enums = assembly.GetTypes().Where(e => e.IsSubclassOf(typeof(Enum)));
            var method = typeof(ResourcesController).GetTypeInfo().DeclaredMethods
                .Single(m => m.Name == nameof(GetEnumValues));

            var resources = new Dictionary<string, IDictionary<string, string>>();

            foreach (var type in enums)
                resources.Add(type.Name,
                    (IDictionary<string, string>) method.MakeGenericMethod(type).Invoke(this, new[] {type}));

            return Ok(resources);
        }

        private IDictionary<string, string> GetEnumValues<T>(Type type) where T : Enum
        {
            return Enum.GetValues(type).Cast<T>().ToDictionary(e => e.ToString(), e => e.GetDescription());
        }
    }
}