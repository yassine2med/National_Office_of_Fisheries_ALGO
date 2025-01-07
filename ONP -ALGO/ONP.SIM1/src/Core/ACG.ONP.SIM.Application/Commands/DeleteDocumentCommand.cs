using System;
using System.Threading;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Exceptions;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Domain.Common;
using ACG.ONP.SIM.Domain.Enums;
using AutoMapper;
using MediatR;
using InvalidOperationException = ACG.ONP.SIM.Application.Common.Exceptions.InvalidOperationException;

namespace ACG.ONP.SIM.Application.Commands
{
    public class DeleteDocumentCommand : IRequest
    {
        public Guid Id { get; set; }
        public DocumentType Type { get; set; }
    }

    public class DeleteDocumentCommandHandler : IRequestHandler<DeleteDocumentCommand>
    {
        private readonly IApplicationDbContext _dbContext;
        private readonly IMapper _mapper;

        public DeleteDocumentCommandHandler(IApplicationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(DeleteDocumentCommand request, CancellationToken cancellationToken)
        {
            switch (request.Type)
            {
                case DocumentType.Document1:
                default:
                    throw new InvalidOperationException();
            }
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