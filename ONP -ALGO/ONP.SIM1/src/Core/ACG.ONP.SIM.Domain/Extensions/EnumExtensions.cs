using System;
using System.Resources;
using ACG.ONP.SIM.Domain.Resources;

namespace ACG.ONP.SIM.Domain.Extensions
{
    public static class EnumExtensions
    {
        public static string GetDescription(this Enum enumValue)
        {
            var resource = new ResourceManager(typeof(EnumResources));

            var resourceKey = $"{enumValue.GetType().Name}_{enumValue}";

            var displayName = resource?.GetString(resourceKey);

            return displayName ?? enumValue.ToString();
        }
    }
}