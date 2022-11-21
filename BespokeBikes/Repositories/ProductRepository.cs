using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BespokenBikes.Models;
using Bogus;


namespace BespokenBikes.Repositories;

public class ProductRepository
{

    public static string[] Manufacturers = { "Trek", "Huffy", "GT", "Marin" };
    public static string[] Styles = { "Kids", "SM", "MD", "LG", "XL" };

    public static IEnumerable<Product> GetAllDemo()
    {
        var faker = new Faker<Product>()
            .RuleFor(x => x.ProductId, Guid.NewGuid())
            .RuleFor(x => x.Name, f => f.Name.LastName(0))
            .RuleFor(x => x.Description, "A really nice bike!")
            .RuleFor(x => x.Manufacturer, f => f.PickRandom(Manufacturers))
            .RuleFor(x => x.Style, f => f.PickRandom(Styles))
            .RuleFor(x => x.PurchasePrice, f => f.Random.Double(100, 500))
            .RuleFor(x => x.SalePrice, f => f.Random.Double(100, 500))
            .RuleFor(x => x.QtyOnHand, f => f.Random.Int(0, 50))
            .RuleFor(x => x.CommissionPercentage, f => f.Random.Float(0, 1));

        return faker.Generate(1000);
    }
}
