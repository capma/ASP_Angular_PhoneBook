using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Week5.Models;

namespace Week5.Controllers
{
    public class UserController : Controller
    {
        DBContext.DatabaseContext _db;

        public UserController(DBContext.DatabaseContext db)
        {
            _db = db;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("[action]")]
        [Route("api/User/GetUser")]
        //public IEnumerable<User> GetUser()
        public IEnumerable<User> GetUser()
        {
            try
            {
                List<User>  userList = _db.User.ToList();
                return userList;
            }
            catch (Exception)
            {

                throw;
            }
            
        }

        // POST api/values
        [HttpPost]
        [Route("api/User/AddUser")]
        public bool AddUser([FromBody]User user)
        {
            try
            {
                var output = (from usr in _db.User
                              where usr.Name == user.Name
                              select usr.Name).Count();

                if (output > 0)
                {
                    return false;
                }
                else
                {
                    _db.Add(user);
                    _db.SaveChanges();
                    return true;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpDelete]
        [Route("api/User/DelUser/{username}")]
        public bool DelUser(string username)
        {
            try
            {
                var userToDelete = _db.User.SingleOrDefault(x => x.Name == username);

                if (userToDelete != null)
                {
                    _db.User.Remove(userToDelete);
                    _db.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}