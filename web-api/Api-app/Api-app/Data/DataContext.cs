using Api_app.Models;
using Microsoft.EntityFrameworkCore;

namespace Api_app.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<PostEntity> Posts { get; set; }
    }
}
