using System;
using System.ComponentModel.DataAnnotations;
using ACG.ONP.SIM.Domain.Enums;
using Microsoft.AspNetCore.Http;

namespace ACG.ONP.SIM.WebApi.Common.Models
{
    /// <summary>
    /// </summary>
    public class BufferedFileUpload
    {
        /// <summary>
        /// </summary>
        [Required]
        public Guid Id { get; set; }

        /// <summary>
        /// </summary>
        [Required]
        public DocumentType Type { get; set; }

        /// <summary>
        /// </summary>
        public DocumentSpec Spec { get; set; } = DocumentSpec.None;

        /// <summary>
        /// </summary>
        [Required]
        public IFormFile File { get; set; }
    }
}