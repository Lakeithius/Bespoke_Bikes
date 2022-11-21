using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BespokenBikes.Models;
using BespokenBikes.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BespokenBikes.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SalespersonsController : ControllerBase
{
    private readonly ILogger<SalespersonsController> _logger;

    public SalespersonsController(ILogger<SalespersonsController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [Route("all")]
    public IEnumerable<Salesperson> GetAll()
    {
        return SalespersonsRepository.GetAllDemo();
    }

    [HttpGet]
    public string Get()
    {
        return "test";
    }

    [HttpPost]
    [Route("edit")]
    public static void UpdateSalesperson([FromBody] Salesperson sp)
    {

    }

}
