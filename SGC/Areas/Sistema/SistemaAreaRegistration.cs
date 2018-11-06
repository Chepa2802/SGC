using System.Web.Mvc;

namespace SGC.Areas.Sistema
{
    public class SistemaAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Sistema";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                    name: "V_Acceso",
                    url: "",
                    defaults: new { controller = "Seguridad", action = "V_Acceso" }
                );

            context.MapRoute(
                    name: "Cb_Proyecto",
                    url: "CargarComboProyectoEnVistaDeAcceso",
                    defaults: new { controller = "Seguridad", action = "Cb_Proyecto" }
                );

            context.MapRoute(
                    name: "AC_Acceder",
                    url: "Acceder",
                    defaults: new { controller = "Seguridad", action = "AC_Acceder" }
                );

            context.MapRoute(
                    name: "V_Sitio",
                    url: "Sitio",
                    defaults: new { controller = "Sitio", action = "V_Sitio" }
                );

            context.MapRoute(
                    name: "AC_Salir",
                    url: "Salir",
                    defaults: new { controller = "Seguridad", action = "AC_Salir" }
                );
        }
    }
}