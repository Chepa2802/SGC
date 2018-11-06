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
    public class SeguridadController : ControladorBase
    {
        // GET: Sistema/Seguridad
        public ActionResult V_Acceso()
        {
            UsuarioModel M = new UsuarioModel();
            return View(M);
        }

        public ActionResult Cb_Proyecto(string vc_usuario)
        {
            UsuarioModel M = new UsuarioModel();
            M.cb_proyecto = Combos.Proyecto("SQL", 1, vc_usuario);
            M.cb_proyecto.RemoveAt(0);
            return PartialView("Cb_Proyecto", M);
        }

        public ActionResult AC_Acceder(UsuarioModel M)
        {
            try
            {
                M.mme.e_tran.vc_conexion_origen         = "SQL";

                M.mme = P_Usuario.Acceder(M.mme);

                Ssn.vc_usuario              = M.mme.me_usuario.e_usuario.vc_usuario;
                Ssn.vc_contraseña           = M.mme.me_usuario.e_usuario.vc_contraseña;
                Ssn.nu_id_proyecto          = M.mme.me_usuario.e_proyecto.nu_id_proyecto;
                Ssn.vc_desc_proyecto        = M.mme.me_usuario.e_proyecto.vc_desc_proyecto;

            }
            catch (Exception ex)
            {
                return Json(App.Error(ex.Message, M.mme));
            }
            return Json(App.Exito(M.mme));
        }

        public ActionResult AC_Salir()
        {
            Session.RemoveAll();
            Session.Abandon();

            return Redirect("/");
        }
    }
}