﻿using System;

namespace ACG.ONP.SIM.Domain.Common
{
    public class StatusValue<TSatausType> where TSatausType : Enum
    {
        public TSatausType Status { get; set; }
        public string Description { get; set; }
        public string CreatedBy { get; set; }
        public DateTime Created { get; set; }
    }
}