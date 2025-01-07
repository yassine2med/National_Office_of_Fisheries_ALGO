using System.Collections.Generic;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application;
using ACG.ONP.SIM.Application.RefData.Commands;
using ACG.ONP.SIM.Application.RefData.Queries;
using ACG.ONP.SIM.Domain.Entities;
using ACG.ONP.SIM.WebApi.Common.Controllers;
using ACG.ONP.SIM.WebApi.Common.Controllers.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ACG.ONP.SIM.WebApi.BO.Controllers
{
    /// <summary>
    ///     Cities (for testing)
    /// </summary>
    public class CitiesController : BaseController<City, int>,
        IGetByIdAction<City, int>,
        ICreateAction<City, City, int>,
        IUpdateAction<City, City, int>
    {
        /// <summary>
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult<City>> Create([FromBody] City entity)
        {
            return await Mediator.Send(new CreateCityCommand {Data = entity});
        }

        /// <summary>
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public Task<ActionResult<City>> GetById(int id)
        {
            return DoGetById(id);
        }

        /// <summary>
        /// </summary>
        /// <param name="id"></param>
        /// <param name="entity"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Update(int id, [FromBody] City entity)
        {
            return await Mediator.Send(new UpdateCityCommand {Id = id, Data = entity});
        }

        /// <summary>
        ///     List all cities
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<List<string>>> Get()
        {
            return await Mediator.Send(new GetCitiesQuery());
        }

        /// <summary>
        ///     List all cities
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpGet("all")]
        public async Task<ActionResult<List<IdValueDto<int>>>> GetAll()
        {
            return await Mediator.Send(new GetAllCitiesQuery());
        }

        /// <summary>
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(int id)
        {
            return await Mediator.Send(new DeleteCityCommand {Id = id});
        }
    }
}