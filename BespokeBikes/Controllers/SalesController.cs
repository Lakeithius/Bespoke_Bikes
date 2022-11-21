using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BespokenBikes.Models;
using BespokenBikes.Repositories;

namespace BespokenBikes.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SalesController : ControllerBase
{
    
    [HttpPost]
    [Route("add")]
    public void CreateSale([FromBody] SaleDTO saleDto)
    {
       // Sale sale = new Sale(saleDto);

       // SalesRepository.AddNewSale(sale);

        // Console.WriteLine(sale.ToString());     
    }

    [HttpGet]
    [Route("all")]
    public IEnumerable<SaleViewModel> GetAllSale()
    {
        return SalesRepository.GetAllDemoVM();
    }
}
