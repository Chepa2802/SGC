using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SGC.Areas.Sistema.Models;
using System.Web.Mvc;

namespace SGC.Areas.Sistema.Controllers.Base
{
    public class SesionExpira : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var ContextoHttp = HttpContext.Current;
            string[] lines = { };
            List<string> ls = new List<string>();
            if
            (
                ContextoHttp.Session[SesionModelo.SessionName] == null
                && (filterContext.ActionDescriptor).ActionName != "V_Acceso"
                && (filterContext.ActionDescriptor).ActionName != "AC_Acceder"
                && (filterContext.ActionDescriptor).ActionName != "AC_Salir"
                && (filterContext.ActionDescriptor).ActionName != "Cb_Proyecto"
                && (filterContext.ActionDescriptor).ActionName != "V_Sitio")
            {

                ls.Add("A" + (filterContext.ActionDescriptor).ActionName);
                ContextoHttp.Response.Redirect("/Salir");
            }
            else if (ContextoHttp.Session[SesionModelo.SessionName] != null && (filterContext.ActionDescriptor).ActionName == "V_Acceso")
            {
                ls.Add("B" + (filterContext.ActionDescriptor).ActionName);
                ContextoHttp.Response.Redirect("/Sitio");
            }
            lines = ls.ToArray();
            base.OnActionExecuting(filterContext);
        }
    }
}