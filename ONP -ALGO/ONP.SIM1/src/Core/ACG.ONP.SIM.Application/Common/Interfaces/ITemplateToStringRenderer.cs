using System.Threading.Tasks;

namespace ACG.ONP.SIM.Application.Common.Interfaces
{
    public interface ITemplateToStringRenderer
    {
        Task<string> RenderTemplateToStringAsync<TModel>(string templateName, TModel model);
    }
}