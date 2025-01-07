using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application;
using ACG.ONP.SIM.Application.Commands;
using ACG.ONP.SIM.Application.Queries;
using ACG.ONP.SIM.Domain.Enums;
using ACG.ONP.SIM.WebApi.Common.Models;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using ApplicationException = ACG.ONP.SIM.Application.Common.Exceptions.ApplicationException;

namespace ACG.ONP.SIM.WebApi.BO.Controllers
{
    /// <summary>
    ///     Document upload/download
    /// </summary>
    [Route("[controller]")]
    public class DocumentsController : Controller
    {
        private IMediator _mediator;

        /// <summary>
        /// </summary>
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();

        /// <summary>
        ///     Upload a document
        /// </summary>
        /// <param name="fileUpload"></param>
        /// <returns></returns>
        [HttpPost("Upload")]
        public async Task<DocumentDto> Upload(BufferedFileUpload fileUpload)
        {
            if (fileUpload.File.Length > 0)
                using (var memoryStream = new MemoryStream())
                {
                    await fileUpload.File.CopyToAsync(memoryStream);

                    // Upload the file if less than 10 MB
                    if (memoryStream.Length < 10485760)
                        return await Mediator.Send(new UploadCommand
                        {
                            Id = fileUpload.Id,
                            Type = fileUpload.Type,
                            Spec = fileUpload.Spec,
                            MimeType = fileUpload.File.ContentType,
                            Uri = fileUpload.File.FileName,
                            Data = memoryStream.ToArray()
                        });
                }

            throw new ApplicationException("Unable to upload the document");
        }

        /// <summary>
        ///     Download a document
        /// </summary>
        /// <param name="type"></param>
        /// <param name="id"></param>
        /// <param name="isThumbnail"></param>
        /// <returns></returns>
        [HttpGet("Download/{type}/{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> Download(DocumentType type, Guid id, [FromQuery] bool isThumbnail = false)
        {
            var document = await Mediator.Send(new DownloadQuery {Type = type, Id = id});
            if (document != null && document.Data != null)
                return GetDocument(document.Data, document.MimeType, isThumbnail);

            return File("~/placeholder-generic.png", "image/png");
        }

        /// <summary>
        ///     Delete a document
        /// </summary>
        /// <param name="type"></param>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{type}/{id}")]
        public async Task<Unit> Delete(DocumentType type, Guid id)
        {
            return await Mediator.Send(new DeleteDocumentCommand {Id = id, Type = type});
        }

        private ActionResult GetDocument(byte[] data, string mimeType, bool isThumbnail = false)
        {
            if (data != null && data.Length > 0)
            {
                if (isThumbnail)
                    return GetThumbnail(data, mimeType);

                return File(data, mimeType);
            }

            return File("~/placeholder-generic.png", "image/png");
        }


        //TODO : move to common
        private ActionResult GetThumbnail(byte[] data, string mimeType)
        {
            if (!mimeType.StartsWith("image/"))
                return File("~/placeholder-generic.png", "image/png");

            using (var stream = new MemoryStream(data))
            {
                var size = ResizeKeepAspect(new Size(640, 360), 640, 360);
                var image = Image.FromStream(stream);
                var thumb = image.GetThumbnailImage(size.Width, size.Height, () => false, IntPtr.Zero);

                using (var ms = new MemoryStream())
                {
                    thumb.Save(ms, ImageFormat.Png);

                    return File(ms.ToArray(), "image/png");
                }
            }
        }

        //TODO : move to common
        private Size ResizeKeepAspect(Size src, int maxWidth, int maxHeight, bool enlarge = false)
        {
            maxWidth = enlarge ? maxWidth : Math.Min(maxWidth, src.Width);
            maxHeight = enlarge ? maxHeight : Math.Min(maxHeight, src.Height);

            var rnd = Math.Min(maxWidth / (decimal) src.Width, maxHeight / (decimal) src.Height);
            return new Size((int) Math.Round(src.Width * rnd), (int) Math.Round(src.Height * rnd));
        }

        private ActionResult GetPdfThumbnail(byte[] data)
        {
            using (var stream = new MemoryStream(data))
            {
            }

            return Ok();
        }
    }
}