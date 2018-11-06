using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Entidad.Sistema;
using SGC.Areas.Global.Models;
using SGC.Areas.Sistema.Controllers.Base;
using SGC.Areas.Sistema.Models;
using Procedimiento;
using System.IO;
using NPOI.HSSF.UserModel;
using NPOI.HPSF;
using NPOI.SS.UserModel;
using SGC.Recursos.Metodos;
using NPOI.SS.Util;

namespace SGC.Areas.Global.Controllers
{
    public class ConductorController : ControladorModeloBase<UsuarioModel>
    {
        // GET: Global/Conductor
        public ActionResult V_Sel_ConsultaCarne()
        {

            ConductorModel M = new ConductorModel();
            try
            {
                M.mme.e_tran.nu_tran_ruta       = 2;
                M.mme.e_tran.vc_conexion_origen = "SQL";

                M.mme.me_conductor.e_proyecto.nu_id_proyecto            = Ssn.nu_id_proyecto;
                M.mme.me_conductor.e_conductor.nu_id_conductor          = null;
                M.mme.me_conductor.e_empresa_trans.nu_id_empresa_trans  = null;

                M.ls_mme = P_Conductor.Sel(M.mme);


                M.cb_empresa_transporte = Combos.Empresa_Transporte("SQL", 1, Ssn.vc_usuario, Ssn.nu_id_proyecto);


                return View("V_ConsultaCarne", M);
            }
            catch (Exception e)
            {
                Ssn.vc_master       = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista  = e.Message;
                return Redirect("/ErrorInterno");
            }
        }

        public ActionResult AC_Sel_ConsultaCarne(ConductorModel M)
        {
            M.mme.e_tran.nu_tran_ruta           = 2;
            M.mme.e_tran.vc_conexion_origen     = "SQL";
            
            M.mme.me_conductor.e_proyecto.nu_id_proyecto            = Ssn.nu_id_proyecto;
            M.mme.me_conductor.e_conductor.nu_id_conductor          = null;
            M.mme.me_conductor.e_empresa_trans.nu_id_empresa_trans  = M.mme.me_conductor.e_empresa_trans.nu_id_empresa_trans;

            M.ls_mme = P_Conductor.Sel(M.mme);

            return PartialView("VP_ConsultaCarne", M);
        }

        public ActionResult V_Get_ConsultaCarne(int id)
        {
            try
            {
                ConductorModel M = new ConductorModel();

                M.mme.e_tran.nu_tran_ruta           = 2;
                M.mme.e_tran.vc_conexion_origen     = "SQL";

                M.mme.me_conductor.e_proyecto.nu_id_proyecto        = Ssn.nu_id_proyecto;
                M.mme.me_conductor.e_conductor.nu_id_conductor      = id;
                M.mme = P_Conductor.Get(M.mme);

                return View("V_VisualizarCarne", M);
            }
            catch (Exception e)
            {
                //Ssn.vc_master = "~/Areas/Ventas/Views/MPVentas.cshtml";
                //Ssn.vc_error_vista = e.Message;
                return Redirect("/ErrorInterno");
            }
        }

        public ActionResult AC_Exportar_Consulta_Carne()
        {
            try
            {
                ConductorModel M = new ConductorModel();

                M.mme.e_tran.nu_tran_ruta           = 3;
                M.mme.e_tran.vc_conexion_origen     = "SQL";
                M.mme.me_conductor.e_proyecto.nu_id_proyecto = Ssn.nu_id_proyecto;

                M.ls_mme = P_Conductor.Sel(M.mme);
            
                var writer = new StreamWriter(new MemoryStream());
                HSSFWorkbook hssfworkbook = new HSSFWorkbook();

                if (M.ls_mme.Count > 0)
                {
                    DocumentSummaryInformation dsi = PropertySetFactory.CreateDocumentSummaryInformation();
                    dsi.Company = "SGC";
                    hssfworkbook.DocumentSummaryInformation = dsi;

                    SummaryInformation si = PropertySetFactory.CreateSummaryInformation();
                    si.Subject = "SGC";
                    hssfworkbook.SummaryInformation = si;

                    String[] Cabecera = {   "Código",
                                            "Nombre",
                                            "Tipo Doc. Identidad",
                                            "Nro. Doc. Identidad",
                                            "Empresa Transporte",
                                            "Licencia"
                                        };

                    Cell Celda;

                    Sheet Hoja = hssfworkbook.CreateSheet("Reporte");

                    //-|> TÍTULO DE DOCUMENTO
                    Font FuenteTitulo = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.NORMAL, IndexedColors.GREEN.Index, 12);
                    CellStyle CssCeldaTitulo = Excel.CssCelda(hssfworkbook, FuenteTitulo, HorizontalAlignment.CENTER, VerticalAlignment.CENTER, IndexedColors.WHITE.Index);

                    Row FilaTitulo = Hoja.CreateRow(0);
                    FilaTitulo.HeightInPoints = 25;
                    FilaTitulo.Sheet.AddMergedRegion((new CellRangeAddress(0, 0, 0, 3)));

                    Celda = Excel.CeldaText(FilaTitulo, 0, CssCeldaTitulo, "REPORTE DE CARNÉS");


                    //-|> CABECERA DE DOCUMENTO
                    Font FuenteEtiqueta = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.BOLD, IndexedColors.BLACK.Index, 8);
                    CellStyle CssCeldaEtiqueta = Excel.CssCelda(hssfworkbook, FuenteEtiqueta, HorizontalAlignment.LEFT, VerticalAlignment.CENTER, IndexedColors.WHITE.Index);

                    Font FuenteValor = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.NORMAL, IndexedColors.BLACK.Index, 8);
                    CellStyle CssCeldaValor = Excel.CssCelda(hssfworkbook, FuenteValor, HorizontalAlignment.LEFT, VerticalAlignment.CENTER, IndexedColors.WHITE.Index);

                    Row FilaEncabezado = Hoja.CreateRow(1);
                    FilaEncabezado.HeightInPoints = 20;

                    Celda = Excel.CeldaText(FilaEncabezado, 0, CssCeldaEtiqueta, "Publicado por: ");
                    Celda = Excel.CeldaText(FilaEncabezado, 1, CssCeldaValor, Ssn.vc_usuario.ToUpper());


                    //-|> CABECERA DE TABLA
                    Font FuenteCabeceraTabla = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.BOLD, IndexedColors.WHITE.Index, 8);
                    CellStyle CssCeldaCabeceraTabla = Excel.CssCelda(hssfworkbook, FuenteCabeceraTabla, HorizontalAlignment.CENTER, VerticalAlignment.CENTER, IndexedColors.BLUE.Index);

                    Row FilaCabeceraTabla = Hoja.CreateRow(2);
                    FilaCabeceraTabla.HeightInPoints = 20;

                    for (int c = 0; c < Cabecera.Length; c++)
                    {
                        Celda = Excel.CeldaText(FilaCabeceraTabla, c, CssCeldaCabeceraTabla, Cabecera[c]);
                    }


                    //-|> DATA
                    Font FuenteTexto = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.NORMAL, IndexedColors.BLACK.Index, 8);
                    CellStyle CssCeldaTexto = Excel.CssCelda(hssfworkbook, FuenteTexto, HorizontalAlignment.LEFT, VerticalAlignment.CENTER, IndexedColors.WHITE.Index);
                    CellStyle CssCeldaTexto2 = Excel.CssCelda(hssfworkbook, FuenteTexto, HorizontalAlignment.CENTER, VerticalAlignment.CENTER, IndexedColors.WHITE.Index);

                    Font FuenteNumero = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.NORMAL, IndexedColors.BLACK.Index, 8);
                    CellStyle CssCeldaNumero = Excel.CssCelda(hssfworkbook, FuenteNumero, HorizontalAlignment.RIGHT, VerticalAlignment.CENTER, IndexedColors.WHITE.Index);

                    for (int i = 0; i < M.ls_mme.Count; i++)
                    {
                        var item = M.ls_mme[i];

                        Row FilaData = Hoja.CreateRow(i + 3);
                        FilaData.HeightInPoints = 20;

                        Celda = Excel.CeldaText(FilaData, 0, CssCeldaTexto, item.me_conductor.e_conductor.vc_cod_conductor);
                        Celda = Excel.CeldaText(FilaData, 1, CssCeldaTexto2, item.me_conductor.e_conductor.vc_nombre_completo);
                        Celda = Excel.CeldaText(FilaData, 2, CssCeldaTexto, item.me_conductor.e_tipo_doc_identidad.vc_desc_tipo_doc_identidad);
                        Celda = Excel.CeldaText(FilaData, 3, CssCeldaTexto, item.me_conductor.e_conductor.vc_nro_doc_identidad);
                        Celda = Excel.CeldaText(FilaData, 4, CssCeldaTexto, item.me_conductor.e_empresa_trans.vc_desc_empresa_trans);
                        Celda = Excel.CeldaText(FilaData, 5, CssCeldaTexto, item.me_conductor.e_conductor.vc_nro_licencia);
                    }



                    for (int c = 0; c < Cabecera.Length; c++)
                    {
                        Hoja.AutoSizeColumn(c, true);
                    }

                }
                writer.Flush();
                MemoryStream file = new MemoryStream();
                hssfworkbook.Write(file);

                return File(file.ToArray(), "application/vnd.ms-excel", "Reporte_Carné_Conductores.xls");
            }
            catch (Exception e)
            {
                Ssn.vc_master       = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista  = e.Message;

                return Redirect("/ErrorInterno");
            }
        }
    }
}