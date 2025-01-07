using ACG.ONP.SIM.Application.Common.Exceptions;
using ACG.ONP.SIM.Domain.Common;
using MediatR;

namespace ACG.ONP.SIM.Application.Common.Interfaces
{
    public interface IApplicationRequestHandler<TRequest, out TResponse> where TRequest : IRequest<TResponse>
    {
        public void CheckEntityExists<T>(T entity) where T : class, IDeletableEntity
        {
            if (entity == null)
                throw new NotFoundException(typeof(T).Name);
        }
    }
}