using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BespokenBikes.Models;
using Newtonsoft.Json;

namespace BespokenBikes.Models;

public class Sale
{
    public Guid SaleId { get; set; }

    public Guid ProductId { get; set; }

    public Guid SalespersonId { get; set; }

    public Guid CustomerId { get; set; }

    public DateTime SaleDate { get; set; }

    public Sale()
    {
        this.SaleId = Guid.NewGuid();
    }

    public Sale(SaleDTO saleDTO)
    {
        this.SaleId = Guid.NewGuid();

        this.ProductId = new Guid(saleDTO.ProductId);
        this.SalespersonId = new Guid(saleDTO.SalespersonId);
        this.CustomerId = new Guid(saleDTO.CustomerId);
        this.SaleDate =  Convert.ToDateTime(saleDTO.SalesDate);
    }
}
