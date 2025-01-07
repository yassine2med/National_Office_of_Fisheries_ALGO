﻿using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ACG.ONP.SIM.Application.Common.Specifications
{
    public class SpecificationEvaluator<TEntity>
        where TEntity : class
    {
        public static IQueryable<TEntity> GetQuery(IQueryable<TEntity> inputQuery,
            ISpecification<TEntity> specification)
        {
            var query = inputQuery;

            if (specification.Criterias != null)
                foreach (var criteria in specification.Criterias)
                    query = query.Where(criteria);

            query = specification.Includes.Aggregate(query,
                (current, include) => current.Include(include));

            query = specification.IncludeStrings.Aggregate(query,
                (current, include) => current.Include(include));

            if (specification.OrderBy != null)
                query = query.OrderBy(specification.OrderBy);
            else if (specification.OrderByDescending != null)
                query = query.OrderByDescending(specification.OrderByDescending);

            if (specification.GroupBy != null) query = query.GroupBy(specification.GroupBy).SelectMany(x => x);

            if (specification.IsPagingEnabled)
                query = query.Skip(specification.Skip)
                    .Take(specification.Take);
            return query;
        }
    }
}