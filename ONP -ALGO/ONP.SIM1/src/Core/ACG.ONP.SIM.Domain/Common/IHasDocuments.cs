using System.Collections.Generic;
using ACG.ONP.SIM.Domain.Entities;

namespace ACG.ONP.SIM.Domain.Common
{
    public interface IHasDocuments<T> where T : AbstractDocument
    {
        List<T> Documents { get; set; }
    }
}