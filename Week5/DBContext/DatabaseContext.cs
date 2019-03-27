using Microsoft.EntityFrameworkCore;
using Week5.Models;

namespace Week5.DBContext
{
    public class DatabaseContext : DbContext
    {
        //public DatabaseContext()
        //{
        //}

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }

        public DbSet<User> User { get; set; }
    }
}
