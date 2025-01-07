using System.Threading;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Exceptions;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Domain.Common;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ACG.ONP.SIM.Application.Commands
{
    public class DeleteCommand<TEntity, TId> : IRequest
        where TEntity : class, IDeletableEntity
    {
        public TId Id { get; set; }
    }

    public class DeleteCommandHandler<TEntity, TId> : IRequestHandler<DeleteCommand<TEntity, TId>>
        where TEntity : class, IDeletableEntity
    {
        private readonly IApplicationDbContext _dbContext;
        private readonly IMapper _mapper;

        public DeleteCommandHandler(IApplicationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(DeleteCommand<TEntity, TId> request, CancellationToken cancellationToken)
        {
            var entity = await _dbContext.Set<TEntity>().FindAsync(request.Id);

            if (entity == null)
                throw new NotFoundException(nameof(TEntity), request.Id);

            entity.IsDeleted = true;

            _dbContext.Entry(entity).State = EntityState.Modified;

            await _dbContext.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}