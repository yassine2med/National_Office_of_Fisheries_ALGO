﻿namespace ACG.ONP.SIM.Domain.Options
{
    public class EmailOptions
    {
        public string MailServer { get; set; }
        public int MailPort { get; set; }
        public bool UseSSL { get; set; }
        public string SenderName { get; set; }
        public string Sender { get; set; }
        public string Password { get; set; }
    }
}