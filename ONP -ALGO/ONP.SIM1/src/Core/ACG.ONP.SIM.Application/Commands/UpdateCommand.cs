using System;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Exceptions;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Application.Common.Mappings;
using ACG.ONP.SIM.Domain.Common;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ACG.ONP.SIM.Application.Commands
{
    public class UpdateCommand<TEntity, TId> : IRequest
        where TEntity : BaseEntity<TId>, IDeletableEntity
    {
        public TId Id { get; set; }
        public TEntity Data { get; set; }
    }

    public class UpdateDtoCommand<TEntity, TDto, TId> : IRequest<Unit>
        where TEntity : BaseEntity<TId>, IDeletableEntity
        where TDto : IMapTo<TEntity>
    {
        public TId Id { get; set; }
        public TDto Data { get; set; }
    }

    public class UpdateCommandHandler<TEntity, TId> : IRequestHandler<UpdateCommand<TEntity, TId>>
        where TEntity : BaseEntity<TId>, IDeletableEntity
    {
        private readonly IApplicationDbContext _dbContext;
        private readonly IMapper _mapper;

        public UpdateCommandHandler(IApplicationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public virtual Task<Unit> Handle(UpdateCommand<TEntity, TId> request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }

    public class
        UpdateDtoCommandHandler<TEntity, TDto, TId> : IRequestHandler<UpdateDtoCommand<TEntity, TDto, TId>, Unit>
        where TEntity : BaseEntity<TId>, IDeletableEntity
        where TDto : IMapTo<TEntity>
    {
        private readonly IApplicationDbContext _dbContext;
        private readonly IMapper _mapper;

        public UpdateDtoCommandHandler(IApplicationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public virtual async Task<Unit> Handle(UpdateDtoCommand<TEntity, TDto, TId> request,
            CancellationToken cancellationToken)
        {
            var entity = _dbContext.Set<TEntity>().Find(request.Id);

            if (entity == null)
                throw new NotFoundException(nameof(TEntity), request.Id);

            var fields = typeof(TDto).GetFields(BindingFlags.Public);

            foreach (var field in fields)
                if (field.Name != nameof(request.Id))
                    _dbContext.Entry(entity).Property(field.Name).CurrentValue = field.GetValue(request.Data);

            _dbContext.Entry(entity).State = EntityState.Modified;

            await _dbContext.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}