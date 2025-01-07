namespace ACG.ONP.SIM.Domain.Options
{
    public class WarrantyOptions
    {
        public MonthCondition ThreeMonths { get; set; }
        public MonthCondition SixMonths { get; set; }
    }

    public class MonthCondition
    {
        public int MinMileage { get; set; }
        public int MaxMileage { get; set; }

        public int MaxAge { get; set; }
    }
}