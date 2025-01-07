﻿using AutoMapper;

namespace ACG.ONP.SIM.Application.Common.Mappings
{
    public interface IMapTo<T>
    {
        public virtual void Mapping(Profile profile)
        {
            profile.CreateMap(GetType(), typeof(T));
        }
    }
}