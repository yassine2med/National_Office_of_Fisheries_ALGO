using System;
using ACG.ONP.SIM.Domain.Common;
using ACG.ONP.SIM.Domain.Enums;

namespace ACG.ONP.SIM.Domain.Entities
{
    public abstract class AbstractDocument : BaseEntity<Guid>
    {
        public string Uri { get; set; }
        public byte[] Data { get; set; }
        public string MimeType { get; set; }
        public bool? IsGenerated { get; set; }

        public DocumentType Type { get; set; }
        public DocumentSpec Spec { get; set; } = DocumentSpec.None;
        public DocumentStatusType Status { get; set; }
        public string Comment { get; set; }
    }
}