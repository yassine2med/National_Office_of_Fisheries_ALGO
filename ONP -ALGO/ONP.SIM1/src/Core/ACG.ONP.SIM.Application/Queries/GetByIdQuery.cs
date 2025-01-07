using System.Threading;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Exceptions;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Application.Common.Mappings;
using ACG.ONP.SIM.Domain.Common;
using AutoMapper;
using MediatR;

namespace ACG.ONP.SIM.Application.Queries
{
    public class GetByIdQuery<TEntity, TId> : IRequest<TEntity>
        where TEntity : class, IDeletableEntity
    {
        public TId Id { get; set; }
    }

    public class GetDtoByIdQuery<TEntity, TDto, TId> : IRequest<TEntity>
        where TEntity : class, IDeletableEntity
        where TDto : IMapTo<TEntity>
    {
        public TId Id { get; set; }
    }

    public class GetByIdQueryHandler<TEntity, TId> : IRequestHandler<GetByIdQuery<TEntity, TId>, TEntity>
        where TEntity : class, IDeletableEntity
    {
        protected readonly IApplicationDbContext _context;
        protected readonly IMapper _mapper;

        public GetByIdQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public virtual async Task<TEntity> Handle(GetByIdQuery<TEntity, TId> request,
            CancellationToken cancellationToken)
        {
            var entity = await _context.Set<TEntity>().FindAsync(request.Id);

            if (entity == null)
                throw new NotFoundException(nameof(TEntity), request.Id);

            return entity;
        }
    }

    public class
        GetDtoByIdQueryHandler<TEntity, TDto, TId> : IRequestHandler<GetDtoByIdQuery<TEntity, TDto, TId>, TEntity>
        where TEntity : class, IDeletableEntity
        where TDto : IMapTo<TEntity>
    {
        protected readonly IApplicationDbContext _context;
        protected readonly IMapper _mapper;

        public GetDtoByIdQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public virtual async Task<TEntity> Handle(GetDtoByIdQuery<TEntity, TDto, TId> request,
            CancellationToken cancellationToken)
        {
            var entity = await _context.Set<TEntity>().FindAsync(request.Id);

            if (entity == null)
                throw new NotFoundException(nameof(TEntity), request.Id);

            return entity;
        }
    }
}