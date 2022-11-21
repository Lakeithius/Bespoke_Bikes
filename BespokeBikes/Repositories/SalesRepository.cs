using System;
using BespokenBikes.Models;
using Bogus;
using System.Collections.Generic;
using AutoMapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System.Data;

namespace BespokenBikes.Repositories
{
    public abstract class SalesRepository
    {

        public static IEnumerable<Sale> GetAllDemo()
        {
            var faker = new Faker<Sale>()
                .RuleFor(x => x.SaleId, new Guid())
                .RuleFor(x => x.ProductId, Guid.NewGuid())
                .RuleFor(x => x.SalespersonId, Guid.NewGuid())
                .RuleFor(x => x.CustomerId, Guid.NewGuid())
                .RuleFor(x => x.SaleDate, f => f.Date.Between(DateTime.Now.AddYears(-50), DateTime.Now));

            return faker.Generate(10000);
        }

        public static IEnumerable<SaleViewModel> GetAllDemoVM()
        {
            var products = ProductRepository.GetAllDemo();
            var customers = CustomersRepository.GetAllDemo();
            var salespersons = SalespersonsRepository.GetAllDemo();

            var faker = new Faker<SaleViewModel>()
                .RuleFor(x => x.Product, f => f.PickRandom(products))
                .RuleFor(x => x.Price, f => f.Random.Double(100,500))
                .RuleFor(x => x.Customer, f => f.PickRandom(customers))
                .RuleFor(x => x.Salesperson, f => f.PickRandom(salespersons))
                .RuleFor(x => x.Commission, f => f.Random.Double(.10, .35))
                .RuleFor(x => x.Date, f => f.Date.Between(DateTime.Now.AddYears(-50), DateTime.Now));

            return faker.Generate(1000);
        }

        public static void AddNewSale(Sale sale)
        {

            var connString = "Host=localhost;Database=demo;Username=admin;Password=password";

            using (NpgsqlConnection connection = new NpgsqlConnection(connString))
            {
                try
                {
                    connection.Open();

                    string sp_AddNewSale =
                        "INSERT INTO main.\"Sales\"(\"saleId\", \"productId\", \"salespersonId\", \"customerId\", \"saleDate\") " +
                        "VALUES(:saleId, :productId, :salesPersonId, :customerId, :saleDate)";

                        //, sale.id, sale.ProductId, sale.SalespersonId, sale.CustomerId, sale.SaleDate);


                    NpgsqlCommand command = new NpgsqlCommand(sp_AddNewSale, connection);

                    command.Parameters.AddWithValue("salesId", sale.SaleId);
                    command.Parameters.AddWithValue("productId", sale.ProductId);
                    command.Parameters.AddWithValue("salesPersonId", sale.SalespersonId);
                    command.Parameters.AddWithValue("customerId", sale.CustomerId);
                    command.Parameters.AddWithValue("saleDate", sale.SaleDate);

                    //command.Parameters.Add("saleId", NpgsqlTypes.NpgsqlDbType.Text).Value = sale.id.ToString();
                    //command.Parameters.Add("productId", NpgsqlTypes.NpgsqlDbType.Text).Value = sale.ProductId.ToString();
                    //command.Parameters.Add("salesPersonId", NpgsqlTypes.NpgsqlDbType.Text).Value = sale.SalespersonId.ToString();
                    //command.Parameters.Add("customerId", NpgsqlTypes.NpgsqlDbType.Text).Value = Guid.NewGuid().ToString();
                    //command.Parameters.Add("saleDate", NpgsqlTypes.NpgsqlDbType.Text).Value = sale.SaleDate.ToString();

                    command.CommandType = CommandType.Text;
                    command.ExecuteNonQuery();
                }
                catch (Exception e)
                {
                    System.Console.WriteLine(e);
                }
                connection.Close();
            }


        }


        public void MapStuff()
        {
            //var config = new MapperConfiguration(cfg =>

            //cfg.AddProfile<SaleProfile>()

            ////cfg.CreateMap<SaleDTO, Sale>()
            ////    .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
            ////    .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
            ////    .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
            ////    .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))

            //);

            //var mapper = new Mapper(config);

            //var results = mapper.Map<SaleDTO, Sale>(saleDto);
        }
    }
    public class SaleProfile : Profile
    {
        public SaleProfile()
        {
            // CreateMap<SaleDTO, Sale>()
            // //.ForMember(dest => dest.id, o => o.(Guid.NewGuid()))
            // .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
            // .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
            // .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName));
        }

    }
}

