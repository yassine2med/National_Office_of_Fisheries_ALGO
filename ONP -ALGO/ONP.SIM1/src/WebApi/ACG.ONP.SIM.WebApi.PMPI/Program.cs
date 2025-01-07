using System.Threading.Tasks;
using ACG.ONP.SIM.WebApi.Common;
using Microsoft.Extensions.Hosting;

namespace ACG.ONP.SIM.WebApi.BO
{
    /// <summary>
    /// </summary>
    public class Program : ProgramBase<Startup>
    {
        private static readonly Program program = new Program();

        /// <summary>
        /// </summary>
        /// <param name="args"></param>
        /// <returns></returns>
        public static async Task Main(string[] args)
        {
            await program.RunAsync(args);
        }

        /// <summary>
        /// </summary>
        /// <param name="args"></param>
        /// <returns></returns>
        public static IHostBuilder CreateHostBuilder(string[] args)
        {
            return program.DoCreateHostBuilder(args);
        }
    }
}