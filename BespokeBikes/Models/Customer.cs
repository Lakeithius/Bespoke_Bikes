using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BespokenBikes.Models;

public class Customer : Person
{
    public Guid CustomerID {get; set;}
    public DateTime StartDate { get; set; }
}
