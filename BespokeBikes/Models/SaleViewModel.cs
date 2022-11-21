using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BespokenBikes.Models;

public class SaleViewModel
{
    public Product Product { get; set; }
    public Customer Customer { get; set; }
    public DateTime Date { get; set; }
    public Double Price { get; set; }
    public Salesperson Salesperson { get; set; }
    public Double  Commission { get; set; }
}
