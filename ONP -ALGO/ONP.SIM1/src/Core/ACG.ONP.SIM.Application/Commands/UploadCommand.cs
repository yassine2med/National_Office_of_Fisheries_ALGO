using System;
using System.Threading;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Exceptions;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Domain.Common;
using ACG.ONP.SIM.Domain.Entities;
using ACG.ONP.SIM.Domain.Enums;
using AutoMapper;
using MediatR;
using InvalidOperationException = ACG.ONP.SIM.Application.Common.Exceptions.InvalidOperationException;

namespace ACG.ONP.SIM.Application.Commands
{
    public class UploadCommand : IRequest<DocumentDto>
    {
        public Guid Id { get; set; }
        public DocumentType Type { get; set; }
        public DocumentSpec Spec { get; set; }
        public string MimeType { get; set; }
        public string Uri { get; set; }
        public byte[] Data { get; set; }
    }

    public class UploadCommandHandler : IRequestHandler<UploadCommand, DocumentDto>
    {
        private readonly IApplicationDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IMediaService _mediaService;

        public UploadCommandHandler(IApplicationDbContext dbContext, IMapper mapper, IMediaService mediaService)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _mediaService = mediaService;
        }

        public async Task<DocumentDto> Handle(UploadCommand request, CancellationToken cancellationToken)
        {
            AbstractDocument document = null;
            switch (request.Type)
            {
                case DocumentType.Document1:
                    break;
                default:
                    throw new InvalidOperationException();
            }

            await _dbContext.SaveChangesAsync(cancellationToken);

            return new DocumentDto
            {
                Id = document.Id.ToString(),
                Type = document.Type,
                Spec = document.Spec,
                MimeType = document.MimeType,
                Status = document.Status
            };
        }

        private async Task<TEntity> GetEntity<TEntity>(Guid id)
            where TEntity : class, IDeletableEntity
        {
            var entity = await _dbContext.Set<TEntity>().FindAsync(id);

            if (entity == null)
                throw new NotFoundException(nameof(TEntity), id);

            return entity;
        }
    }
}