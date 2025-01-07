using System;

namespace ACG.ONP.SIM.Domain.Common
{
    public interface IAuditableEntity<TUser>
    {
        public TUser CreatedBy { get; set; }
        public DateTime Created { get; set; }
        public TUser LastModifiedBy { get; set; }
        public DateTime? LastModified { get; set; }
    }
}