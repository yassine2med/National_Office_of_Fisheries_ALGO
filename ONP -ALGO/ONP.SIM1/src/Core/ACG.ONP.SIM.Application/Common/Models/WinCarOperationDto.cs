using System;
using System.ComponentModel.DataAnnotations;

namespace ACG.ONP.SIM.Application.Common.Models
{
    /// <summary>
    ///     données d'achat/vente
    /// </summary>
    public class WinCarOperationDto
    {
        /// <summary>
        ///     Numéro d'immatriculation du véhicle
        /// </summary>
        [Required]
        public string Registration { get; set; }

        /// <summary>
        ///     VIN du véhicle
        /// </summary>
        [Required]
        public string VIN { get; set; }

        /// <summary>
        ///     Type d'opération (BA = 0 / facture = 1)
        /// </summary>
        [Required]
        public int OperationType { get; set; }

        /// <summary>
        ///     Numéro de BA/facture
        /// </summary>
        [Required]
        public string Number { get; set; }

        /// <summary>
        ///     Prix d'achat/vente
        /// </summary>
        public double? Price { get; set; }

        /// <summary>
        ///     Date d'achat/vente
        /// </summary>
        [Required]
        public DateTime Date { get; set; }
    }
}