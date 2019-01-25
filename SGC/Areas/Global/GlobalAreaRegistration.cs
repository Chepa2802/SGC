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
            #region Conductor
            context.MapRoute(
                name: "V_Sel_Conductor",
                url: "ConsultaDeConductor",
                defaults: new { controller = "Conductor", action = "V_Sel_Conductor" }
            );

            context.MapRoute(
                name: "AC_Sel_Conductor",
                url: "ConsultarConductor",
                defaults: new { controller = "Conductor", action = "AC_Sel_Conductor" }
            );
            
            context.MapRoute(
                name: "V_Ins_Conductor",
                url: "CrearConductor",
                defaults: new { controller = "Conductor", action = "V_Ins_Conductor" }
            );

            context.MapRoute(
                name: "AC_Ins_Conductor",
                url: "RegistraConductor",
                defaults: new { controller = "Conductor", action = "AC_Ins_Conductor" }
            );
            
            context.MapRoute(
                name: "V_Get_Conductor",
                url: "VisualizarConductor",
                defaults: new { controller = "Conductor", action = "V_Get_Conductor" }
            );

            context.MapRoute(
                name: "V_Upd_Conductor",
                url: "ActualizaConductor",
                defaults: new { controller = "Conductor", action = "V_Upd_Conductor" }
            );

            context.MapRoute(
                name: "AC_Upd_Conductor",
                url: "ActualizarConductor",
                defaults: new { controller = "Conductor", action = "AC_Upd_Conductor" }
            );
            
            context.MapRoute(
                name: "AC_UpdEstado_Conductor",
                url: "ActualizarEstadoConductor",
                defaults: new { controller = "Conductor", action = "AC_UpdEstado_Conductor" }
            );
            
            context.MapRoute(
                name: "AC_Exportar_Conductor",
                url: "ExportarConductor",
                defaults: new { controller = "Conductor", action = "AC_Exportar_Conductor" }
            );

            context.MapRoute(
                name: "AC_Conductor_Cargar_Imagen_Temp",
                url: "ConductorCargarImagenTemp",
                defaults: new { controller = "Conductor", action = "AC_Conductor_Cargar_Imagen_Temp" }
            );

            context.MapRoute(
                name: "AC_Conductor_Eliminar_Imagen_Temp",
                url: "ConductorEliminarImagenTemp",
                defaults: new { controller = "Conductor", action = "AC_Conductor_Eliminar_Imagen_Temp" }
            );

            context.MapRoute(
                name: "V_Imp_Conductor",
                url: "ImportarConductor",
                defaults: new { controller = "Conductor_Importar", action = "V_Imp_Conductor" }
            );

            context.MapRoute(
                name: "AC_Descargar_Plantilla_Importacion_Conductor",
                url: "DescargarPlantillaImportacionConductor",
                defaults: new { controller = "Conductor_Importar", action = "AC_Descargar_Plantilla_Importacion_Conductor" }
            );

            context.MapRoute(
                name: "AC_Leer_Excel_Importar_Conductores",
                url: "LeerExcelImportarConductores",
                defaults: new { controller = "Conductor_Importar", action = "AC_Leer_Excel_Importar_Conductores" }
            );

            #endregion

            #region Consulta de Carné
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
            #endregion

            #region Empresa Transporte
            context.MapRoute(
                name: "V_Sel_ConsultaEmpresaTrans",
                url: "ConsultaDeEmpresaTrans",
                defaults: new { controller = "Empresa_Trans", action = "V_Sel_ConsultaEmpresaTrans" }
            );

            context.MapRoute(
                name: "AC_Sel_ConsultaEmpresaTrans",
                url: "ConsultarEmpresaTrans",
                defaults: new { controller = "Empresa_Trans", action = "AC_Sel_ConsultaEmpresaTrans" }
            );

            context.MapRoute(
                name: "V_Ins_EmpresaTrans",
                url: "CrearEmpresaTrans",
                defaults: new { controller = "Empresa_Trans", action = "V_Ins_EmpresaTrans" }
            );

            context.MapRoute(
                name: "AC_Ins_EmpresaTrans",
                url: "RegistraEmpresaTrans",
                defaults: new { controller = "Empresa_Trans", action = "AC_Ins_EmpresaTrans" }
            );

            context.MapRoute(
                name: "V_Get_EmpresaTrans",
                url: "VisualizarEmpresaTrans",
                defaults: new { controller = "Empresa_Trans", action = "V_Get_EmpresaTrans" }
            );

            context.MapRoute(
                name: "V_Upd_EmpresaTrans",
                url: "ActualizaEmpresaTrans",
                defaults: new { controller = "Empresa_Trans", action = "V_Upd_EmpresaTrans" }
            );

            context.MapRoute(
                name: "AC_Upd_EmpresaTrans",
                url: "ActualizarEmpresaTrans",
                defaults: new { controller = "Empresa_Trans", action = "AC_Upd_EmpresaTrans" }
            );

            context.MapRoute(
                name: "AC_UpdEstado_EmpresaTrans",
                url: "CambiarEstadoEmpresaTrans",
                defaults: new { controller = "Empresa_Trans", action = "AC_UpdEstado_EmpresaTrans" }
            );

            context.MapRoute(
                name: "AC_Exportar_EmpresaTrans",
                url: "ExportarEmpresaTrans",
                defaults: new { controller = "Empresa_Trans", action = "AC_Exportar_EmpresaTrans" }
            );
            #endregion

            #region Impresión Carné

            context.MapRoute(
                name: "V_Sel_ImpresionCarne",
                url: "ConsultaDeImpresionCarne",
                defaults: new { controller = "Conductor", action = "V_Sel_ImpresionCarne" }
            );

            context.MapRoute(
                name: "AC_ImprimirCarneConductor",
                url: "ImpresionCarneConductor",
                defaults: new { controller = "Conductor", action = "AC_ImprimirCarneConductor" }
            );

            #endregion
        }

    }
}