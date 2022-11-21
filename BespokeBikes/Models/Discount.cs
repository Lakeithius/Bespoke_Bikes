using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BespokenBikes.Models;

public class Discount
{
    public Product Product { get; set; }
    public DateTime BeginDate { get; set; }
    public DateTime EndDate { get; set; }
    public double Percentage { get; set; }
    public bool isActive
    {
        get
        {
            if(BeginDate <= DateTime.Now && DateTime.Now < EndDate)
                return true;

            return false;
        }
    }
}
