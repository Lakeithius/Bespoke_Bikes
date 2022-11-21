using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace BespokenBikes.Models;

public class SaleDTO
{
    [JsonProperty("id")]
    public string id { get; set; }

    [JsonProperty("firstName")]
    public string FirstName { get; set; }

    [JsonProperty("productId")]
    public string ProductId { get; set; }

    [JsonProperty("salespersonId")]
    public string SalespersonId { get; set; }

    [JsonProperty("customerId")]
    public string CustomerId { get; set; }

    [JsonProperty("salesDate")]
    public string SalesDate { get; set; }

}
	

