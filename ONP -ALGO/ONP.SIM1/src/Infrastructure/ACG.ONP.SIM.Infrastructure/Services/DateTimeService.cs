using System;
using ACG.ONP.SIM.Application.Common.Interfaces;

namespace ACG.ONP.SIM.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}