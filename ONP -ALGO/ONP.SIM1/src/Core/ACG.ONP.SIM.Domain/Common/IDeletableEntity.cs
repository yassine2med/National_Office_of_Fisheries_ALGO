namespace ACG.ONP.SIM.Domain.Common
{
    public interface IDeletableEntity
    {
        public bool? IsDeleted { get; set; }
    }
}