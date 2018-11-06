using System.Web.Mvc;

namespace SGC.Areas.Global
{
    public class GlobalAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Global";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                name: "V_Sel_ConsultaCarne",
                url: "ConsultaDeCarne",
                defaults : new { controller = "Conductor", action = "V_Sel_ConsultaCarne" }
            );

            context.MapRoute(
                name: "AC_Sel_ConsultaCarne",
                url: "ConsultarCarne",
                defaults: new { controller = "Conductor", action = "AC_Sel_ConsultaCarne" }
            );

            context.MapRoute(
                name: "V_Get_ConsultaCarne",
                url: "VisualizarCarne",
                defaults: new { controller = "Conductor", action = "V_Get_ConsultaCarne" }
            );

            context.MapRoute(
                name: "AC_Exportar_Consulta_Carne",
                url: "ExportarExcelConsultaCarne",
                defaults: new { controller = "Conductor", action = "AC_Exportar_Consulta_Carne" }
            );
        }

    }
}