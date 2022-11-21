using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BespokenBikes.Models;
using BespokenBikes.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace BespokenBikes.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    [HttpGet]
    [Route("all")]
    public IEnumerable<Product> GetAll()
    {
        return ProductRepository.GetAllDemo();
    }

    [HttpPost]
    public IActionResult AddProduct()
    {
        //prevent dupes
        //run sql(call repo) where name, manufacturer, and style 
        //if exist dont add, else add
        return null;
    }
}
