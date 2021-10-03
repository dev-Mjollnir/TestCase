using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using TestCase.IICUTech;

namespace TestCase.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [Route("Home/Login")]
        public string Login(string username, string password)
        {
            var client = new ICUTechClient();
            var response = client.Login(username, password, string.Empty);         
            return response;
        }
    }
}