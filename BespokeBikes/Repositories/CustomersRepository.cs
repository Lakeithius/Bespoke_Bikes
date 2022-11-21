using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BespokenBikes.Models;
using Bogus;

namespace BespokenBikes.Repositories;

public class CustomersRepository
{
    public static IEnumerable<Customer> GetAllDemo()
    {
         var faker = new Faker<Customer>()
            .RuleFor(x => x.CustomerID, Guid.NewGuid())
            .RuleFor(x => x.personID, new Guid())
            .RuleFor(x => x.FirstName, f => f.Name.FirstName(0))
            .RuleFor(x => x.LastName, f => f.Name.LastName(0))
            .RuleFor(x => x.PhoneNumber, f => f.Phone.PhoneNumber())
            .RuleFor(x => x.Adress, f => f.Address.StreetAddress())
            .RuleFor(x => x.City, f => f.Address.City())
            .RuleFor(x => x.State, f => f.Address.State())
            .RuleFor(x => x.ZipCode, f => f.Address.ZipCode())
            .RuleFor(x => x.DateOfBirth, f => f.Date.PastOffset(100, DateTime.Now.AddYears(-18)).Date)
            .RuleFor(x => x.StartDate, f => f.Date.Between(DateTime.Now.AddYears(-50), DateTime.Now));

        return faker.Generate(100);
    }
}
