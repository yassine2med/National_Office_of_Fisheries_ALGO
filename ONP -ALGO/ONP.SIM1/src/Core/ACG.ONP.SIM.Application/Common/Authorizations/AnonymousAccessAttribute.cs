using System;

namespace ACG.ONP.SIM.Application.Common.Authorizations
{
    [AttributeUsage(AttributeTargets.Class)]
    public class AnonymousAccessAttribute : Attribute
    {
    }
}