using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TaskTestUser.Models;

namespace TaskTestUser.Controllers
{
    public class UsersController : Controller
    {
        [HttpPost]
        public JsonResult Create([Bind(Include = "FirstName,LastName,MiddleName")] Person person)
        {
            return Json(person);
        }
    }
}