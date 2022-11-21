using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BespokenBikes.Models;

public class Salesperson : Person
{
    public Guid spId { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime TerminationDate { get; set; }
    public string ManagerId { get; set; } // or Manager as person

}
