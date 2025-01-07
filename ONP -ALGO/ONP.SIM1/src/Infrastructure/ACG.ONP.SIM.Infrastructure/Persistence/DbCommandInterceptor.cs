using System;
using System.Data.Common;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace ACG.ONP.SIM.Infrastructure.Persistence
{
    public class DbCommandInterceptor : Microsoft.EntityFrameworkCore.Diagnostics.DbCommandInterceptor
    {
        public override InterceptionResult<DbDataReader> ReaderExecuting(DbCommand command, CommandEventData eventData,
            InterceptionResult<DbDataReader> result)
        {
            Console.WriteLine(command.CommandText);

            return base.ReaderExecuting(command, eventData, result);
        }
    }
}