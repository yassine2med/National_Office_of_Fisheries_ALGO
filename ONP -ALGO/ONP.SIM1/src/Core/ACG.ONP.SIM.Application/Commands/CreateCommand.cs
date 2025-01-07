using System.Threading;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Application.Common.Mappings;
using ACG.ONP.SIM.Domain.Common;
using AutoMapper;
using MediatR;

namespace ACG.ONP.SIM.Application.Commands
{
    public class CreateCommand<TEntity, TId> : IRequest<TEntity>
        where TEntity : class, IDeletableEntity
    {
        public TEntity Data { get; set; }
    }

    public class CreateDtoCommand<TEntity, TDto, TId> : IRequest<TEntity>
        where TEntity : class, IDeletableEntity
        where TDto : IMapTo<TEntity>
    {
        public TDto Data { get; set; }
    }

    public class CreateCommandHandler<TEntity, TId> : IRequestHandler<CreateCommand<TEntity, TId>, TEntity>
        where TEntity : class, IDeletableEntity
    {
        private readonly IApplicationDbContext _dbContext;
        private readonly IMapper _mapper;

        public CreateCommandHandler(IApplicationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public virtual async Task<TEntity> Handle(CreateCommand<TEntity, TId> request,
            CancellationToken cancellationToken)
        {
            _dbContext.Set<TEntity>().Add(request.Data);

            await _dbContext.SaveChangesAsync(cancellationToken);

            return request.Data;
        }
    }

    public class
        CreateDtoCommandHandler<TEntity, TDto, TId> : IRequestHandler<CreateDtoCommand<TEntity, TDto, TId>, TEntity>
        where TEntity : class, IDeletableEntity
        where TDto : IMapTo<TEntity>
    {
        private readonly IApplicationDbContext _dbContext;
        private readonly IMapper _mapper;

        public CreateDtoCommandHandler(IApplicationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public virtual async Task<TEntity> Handle(CreateDtoCommand<TEntity, TDto, TId> request,
            CancellationToken cancellationToken)
        {
            var entity = _mapper.Map<TEntity>(request.Data);
            _dbContext.Set<TEntity>().Add(entity);

            await _dbContext.SaveChangesAsync(cancellationToken);

            return entity;
        }
    }
}