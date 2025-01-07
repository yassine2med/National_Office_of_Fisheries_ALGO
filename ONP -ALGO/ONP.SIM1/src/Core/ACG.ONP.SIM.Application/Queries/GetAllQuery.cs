﻿using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Extensions;
using ACG.ONP.SIM.Application.Common.Interfaces;
using ACG.ONP.SIM.Application.Common.Mappings;
using ACG.ONP.SIM.Application.Common.Models;
using ACG.ONP.SIM.Domain.Common;
using ACG.ONP.SIM.Domain.Constants;
using ACG.ONP.SIM.Domain.Enums;
using AutoMapper;
using MediatR;

namespace ACG.ONP.SIM.Application.Queries
{
    public class GetAllQuery<TEntity, TId> : IRequest<PagedResult<TEntity>>
        where TEntity : class, IDeletableEntity, IAuditableEntity<string>
    {
        public int? Page { get; set; } = 1;
        public int? Size { get; set; } = 25;
        public string SortPropertyName { get; set; }
        public SortDirection? SortDirection { get; set; }
    }

    public class GetAllDtoQuery<TEntity, TDto, TId> : IRequest<PagedResult<TEntity>>
        where TEntity : class, IDeletableEntity, IAuditableEntity<string>
        where TDto : class, IMapTo<TEntity>
    {
        public int? Page { get; set; } = 1;
        public int? Size { get; set; } = 25;
    }

    public class GetAllQueryHandler<TEntity, TId> : IRequestHandler<GetAllQuery<TEntity, TId>, PagedResult<TEntity>>
        where TEntity : class, IDeletableEntity, IAuditableEntity<string>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetAllQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public virtual async Task<PagedResult<TEntity>> Handle(GetAllQuery<TEntity, TId> request,
            CancellationToken cancellationToken)
        {
            return await _context.Set<TEntity>()
                .OrderByDescending(t => t.Created)
                .GetPaged(request.Page.GetValueOrDefault(1), request.Size.GetValueOrDefault(25));
        }
    }

    public class
        GetAllDtoQueryHandler<TEntity, TDto, TId> : IRequestHandler<GetAllDtoQuery<TEntity, TDto, TId>,
            PagedResult<TEntity>>
        where TEntity : class, IDeletableEntity, IAuditableEntity<string>
        where TDto : class, IMapTo<TEntity>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetAllDtoQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<PagedResult<TEntity>> Handle(GetAllDtoQuery<TEntity, TDto, TId> request,
            CancellationToken cancellationToken)
        {
            return await _context.Set<TEntity>()
                .OrderByDescending(t => t.Created)
                .GetPaged(request.Page.GetValueOrDefault(1),
                    request.Size.GetValueOrDefault(CoreConstants.DefaultPageSize));
        }
    }
}