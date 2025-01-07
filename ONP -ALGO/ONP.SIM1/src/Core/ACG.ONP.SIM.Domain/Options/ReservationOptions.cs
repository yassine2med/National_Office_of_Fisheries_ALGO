namespace ACG.ONP.SIM.Domain.Options
{
    public class ReservationOptions
    {
        public string StoreKey { get; set; }
        public string OrgClientId { get; set; }
        public string OrgCurrency { get; set; }
        public string BillToName { get; set; }
        public string BillToCompany { get; set; }
        public string Refreshtime { get; set; }
        public string BillToStreet1 { get; set; }
        public string BillToCity { get; set; }
        public string BillToStateProv { get; set; }
        public string BillToPostalCode { get; set; }
        public string BillToCountry { get; set; }
        public string HashAlgorithm { get; set; }
        public double DefaultAmount { get; set; }
        public string ConfirmUrl { get; set; }
        public string PayementEndPoint { get; set; }

        public string RedirectionUrl { get; set; }

        public int WorkingHourMin { get; set; }
        public int WorkingHourMax { get; set; }
    }
}