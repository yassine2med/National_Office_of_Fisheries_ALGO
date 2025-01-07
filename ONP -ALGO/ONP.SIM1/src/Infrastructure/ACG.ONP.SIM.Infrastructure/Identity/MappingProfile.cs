﻿using System;
using System.Linq;
using System.Reflection;
using ACG.ONP.SIM.Application.Common.Mappings;
using AutoMapper;

namespace ACG.ONP.SIM.Infrastructure.Identity
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            ApplyMappingsFromAssembly(Assembly.GetExecutingAssembly());
        }

        private void ApplyMappingsFromAssembly(Assembly assembly)
        {
            var types = assembly.GetTypes()
                .Where(t => t.GetInterfaces().Any(i =>
                    i.IsGenericType && (i.GetGenericTypeDefinition() == typeof(IMapFrom<>) ||
                                        i.GetGenericTypeDefinition() == typeof(IMapTo<>))))
                .ToList();

            foreach (var type in types)
            {
                var instance = Activator.CreateInstance(type);

                if (type.GetInterfaces().Any(t => t.GetGenericTypeDefinition() == typeof(IMapFrom<>)))
                {
                    var methodInfo = type.GetMethod("Mapping") ?? type.GetInterface("IMapFrom`1").GetMethod("Mapping");
                    methodInfo?.Invoke(instance, new object[] {this});
                }

                if (type.GetInterfaces().Any(t => t.GetGenericTypeDefinition() == typeof(IMapTo<>)))
                {
                    var methodInfo = type.GetMethod("Mapping") ?? type.GetInterface("IMapTo`1").GetMethod("Mapping");
                    methodInfo?.Invoke(instance, new object[] {this});
                }
            }
        }
    }
}