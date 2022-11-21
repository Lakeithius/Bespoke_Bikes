using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BespokenBikes.Models;

public class Product
{
    public Guid ProductId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Manufacturer { get; set; }
    public string Style { get; set; }
    public Double PurchasePrice { get; set; }
    public Double SalePrice { get; set; }
    public int QtyOnHand { get; set; } // create Catalog
    public float CommissionPercentage { get; set; }
}
