using System;
using ACG.ONP.SIM.Domain.Enums;

namespace ACG.ONP.SIM.Application
{
    public class DocumentDto
    {
        public string Id { get; set; }
        public DocumentType Type { get; set; }
        public DocumentSpec Spec { get; set; }
        public string MimeType { get; set; }
        public DocumentStatusType Status { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Validated { get; set; }
        public string Comment { get; set; }
    }
}