using System;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Domain.Common;
using ACG.ONP.SIM.Domain.Entities;
using ACG.ONP.SIM.Domain.Enums;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ACG.ONP.SIM.Application.Queries
{
    public class DownloadQuery : IRequest<AbstractDocument>
    {
        public Guid Id { get; set; }
        public DocumentType Type { get; set; }
        public bool IsThumbnail { get; set; } = false;
        public bool IsWebP { get; set; } = false;
    }


    public class DonwloadQueryHandler : IRequestHandler<DownloadQuery, AbstractDocument>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;
        private readonly IMediaService _mediaService;
        private readonly IStorage _storage;

        public DonwloadQueryHandler(IApplicationDbContext context, IMapper mapper, IStorage storage,
            IMediaService mediaService)
        {
            _context = context;
            _mapper = mapper;
            _storage = storage;
            _mediaService = mediaService;
        }

        public virtual async Task<AbstractDocument> Handle(DownloadQuery request, CancellationToken cancellationToken)
        {
            switch (request.Type)
            {
                case DocumentType.Document1:

                default:
                    return null;
            }
        }

        private async Task<AbstractDocument> GetDocument<TEntity, TDocument>(DownloadQuery request)
            where TEntity : BaseEntity<Guid>, IHasDocuments<TDocument>
            where TDocument : AbstractDocument
        {
            AbstractDocument document = await _context.Set<TDocument>().FindAsync(request.Id);
            if (document == null)
            {
                IHasDocuments<TDocument> entity = await _context.Set<TEntity>()
                    .Where(e => e.Id == request.Id)
                    .Include(e => e.Documents)
                    .OrderByDescending(e => e.Created)
                    .FirstOrDefaultAsync();

                document = entity?.Documents?.OrderBy(e => e.Uri).FirstOrDefault(e => e.Type == request.Type);
            }

            if (document != null)
            {
                var docId = document.Uri;
                var fallbackDocId = docId;
                if (!string.IsNullOrEmpty(document.Uri))
                {
                    var uriParts = document.Uri.Split(":");
                    if (uriParts.Length == 2)
                    {
                        docId = uriParts[1];
                        fallbackDocId = docId;
                    }

                    if (request.IsThumbnail) docId += "_thumb";

                    if (request.IsWebP) docId += "_webp";
                }

                var stream = (MemoryStream) await _storage.GetFileAsync(docId);
                if (stream == null)
                {
                    if (request.IsWebP)
                    {
                        stream = (MemoryStream) await _storage.GetFileAsync(fallbackDocId);
                        var webPStream = (MemoryStream) _mediaService.GetThumbnail(stream);
                        await _storage.SaveFileAsync(webPStream, request.Type.ToString("G").ToLower(), docId);
                        webPStream.Position = 0;
                        document.Data = webPStream.ToArray();
                    }
                    else
                    {
                        stream = (MemoryStream) await _storage.GetFileAsync(fallbackDocId);
                        var thumbStream = (MemoryStream) _mediaService.GetThumbnail(stream);
                        await _storage.SaveFileAsync(thumbStream, request.Type.ToString("G").ToLower(), docId);
                        thumbStream.Position = 0;
                        document.Data = thumbStream.ToArray();
                    }
                }
                else
                {
                    if (stream != null)
                    {
                        stream.Position = 0;
                        document.Data = stream.ToArray();
                    }
                }
            }

            return document;
        }
    }
}