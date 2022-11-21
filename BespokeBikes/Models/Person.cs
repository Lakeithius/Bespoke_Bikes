using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace BespokenBikes.Models;

public class Person
{
    public Guid personID { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string PhoneNumber { get; set; }
    public string Email { get; set; }
    public string Adress { get; set; }
    public string AdressLine2 { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string ZipCode { get; set; }
    public string FullName => $"{FirstName} {LastName}".Trim();
    public DateTime DateOfBirth { get; set; }
}
