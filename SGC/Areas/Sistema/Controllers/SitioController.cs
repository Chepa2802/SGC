using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SGC.Areas.Sistema.Models;
using SGC.Recursos.Metodos;
using Procedimiento;
using SGC.Areas.Sistema.Controllers.Base;

namespace SGC.Areas.Sistema.Controllers
{
    public class SitioController : ControladorModeloBase<UsuarioModel>
    {
        // GET: Sistema/Sitio
        //public ActionResult Index()
        //{
        //    return View();
        //}
        public SitioController() : base()
        {
        }

        public ActionResult V_Sitio()
        {
            var M = new UsuarioModel();
            try
            {

            }
            catch (Exception e)
            {
                Ssn.vc_master = "~/Areas/Ventas/Views/MPVentas.cshtml";
                Ssn.vc_error_vista = e.Message;

                return Redirect("/ErrorInterno");
            }
            return View("V_Sitio", M);
        }
    }
}