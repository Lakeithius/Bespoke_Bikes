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
public class CustomerController : ControllerBase
{
    [HttpGet]
    [Route("all")]
    public IEnumerable<Customer> GetAll()
    {
        return CustomersRepository.GetAllDemo();
    }
}
