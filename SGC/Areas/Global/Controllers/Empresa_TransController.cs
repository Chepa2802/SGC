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
    public class Empresa_TransController : ControladorModeloBase<UsuarioModel>
    {
        // GET: Global/Empresa_Trans
        public ActionResult V_Sel_ConsultaEmpresaTrans()
        {

            Empresa_TransModel M = new Empresa_TransModel();
            try
            {
                M.mme.e_tran.nu_tran_ruta           = 4;
                M.mme.e_tran.vc_conexion_origen     = "SQL";

                M.mme.me_empresa_trans.e_proyecto.nu_id_proyecto            = Ssn.nu_id_proyecto;
                M.mme.me_empresa_trans.e_empresa_trans.nu_id_empresa_trans  = null;

                M.ls_mme = P_Empresa_Trans.Sel(M.mme);

                return View("V_Consultar", M);
            }
            catch (Exception e)
            {
                Ssn.vc_master = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista = e.Message;
                return Redirect("/ErrorInterno");
            }
        }

        public ActionResult AC_Sel_ConsultaEmpresaTrans(Empresa_TransModel M)
        {
            M.mme.e_tran.nu_tran_ruta           = 4;
            M.mme.e_tran.vc_conexion_origen     = "SQL";

            M.mme.me_empresa_trans.e_proyecto.nu_id_proyecto            = Ssn.nu_id_proyecto;
            M.mme.me_empresa_trans.e_empresa_trans.nu_id_empresa_trans  = null;

            M.ls_mme = P_Empresa_Trans.Sel(M.mme);

            return PartialView("VP_Empresa_Trans", M);
        }

        public ActionResult V_Ins_EmpresaTrans()
        {
            
            return View("V_Crear");
        }

        public ActionResult AC_Ins_EmpresaTrans(Empresa_TransModel M)
        {
            try
            {
                M.mme.e_tran.nu_tran_ruta           = 1;
                M.mme.e_tran.vc_conexion_origen     = "SQL";
                M.mme.e_tran.ch_tran_stdo_regi      = "A";
                M.mme.e_tran.vc_tran_usua_regi      = Ssn.vc_usuario;

                M.mme.me_empresa_trans.e_proyecto.nu_id_proyecto    = Ssn.nu_id_proyecto;

                M.mme = P_Empresa_Trans.Ins(M.mme);

            }
            catch (Exception e)
            {
                return Json(App.Error(e.Message, M.mme));
            }
            return Json(App.Exito(M.mme));
        }

        public ActionResult V_Get_EmpresaTrans(int id)
        {
            var M = new Empresa_TransModel();
            try
            {
                M.mme.e_tran.nu_tran_ruta       = 2;
                M.mme.e_tran.vc_conexion_origen = "SQL";

                M.mme.me_empresa_trans.e_proyecto.nu_id_proyecto            = Ssn.nu_id_proyecto;
                M.mme.me_empresa_trans.e_empresa_trans.nu_id_empresa_trans  = id;
                
                M.mme = P_Empresa_Trans.Get(M.mme);

                return View("V_Visualizar", M);
            }
            catch (Exception e)
            {
                Ssn.vc_master = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista = e.Message;
                return Redirect("/ErrorInterno");
            }
        }

        public ActionResult V_Upd_EmpresaTrans(int id)
        {
            var M = new Empresa_TransModel();
            try
            {
                M.mme.e_tran.nu_tran_ruta       = 2;
                M.mme.e_tran.vc_conexion_origen = "SQL";

                M.mme.me_empresa_trans.e_proyecto.nu_id_proyecto            = Ssn.nu_id_proyecto;
                M.mme.me_empresa_trans.e_empresa_trans.nu_id_empresa_trans  = id;

                M.mme = P_Empresa_Trans.Get(M.mme);

                return View("V_Actualizar", M);
            }
            catch (Exception e)
            {
                Ssn.vc_master = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista = e.Message;
                return Redirect("/ErrorInterno");
            }
        }

        public ActionResult AC_Upd_EmpresaTrans(Empresa_TransModel M)
        {
            try
            {
                M.mme.e_tran.nu_tran_ruta       = 1;
                M.mme.e_tran.vc_conexion_origen = "SQL";
                M.mme.e_tran.vc_tran_usua_regi  = Ssn.vc_usuario;

                M.mme.me_empresa_trans.e_proyecto.nu_id_proyecto = Ssn.nu_id_proyecto;

                M.mme = P_Empresa_Trans.Upd(M.mme);

            }
            catch (Exception e)
            {
                return Json(App.Error(e.Message, M.mme));
            }
            return Json(App.Exito(M.mme));
        }

        public ActionResult AC_UpdEstado_EmpresaTrans(int id)
        {
            Empresa_TransModel M = new Empresa_TransModel();
            try
            {
                M.mme.e_tran.nu_tran_ruta       = 1;
                M.mme.e_tran.vc_conexion_origen = "SQL";
                M.mme.e_tran.vc_tran_usua_regi  = Ssn.vc_usuario;

                M.mme.me_empresa_trans.e_proyecto.nu_id_proyecto            = Ssn.nu_id_proyecto;
                M.mme.me_empresa_trans.e_empresa_trans.nu_id_empresa_trans  = id;

                M.mme = P_Empresa_Trans.Upd_Estado(M.mme);

            }
            catch (Exception e)
            {
                return Json(App.Error(e.Message, M.mme));
            }
            return Json(App.Exito(M.mme));
        }

        public ActionResult AC_Exportar_EmpresaTrans()
        {
            try
            {
                Empresa_TransModel M = new Empresa_TransModel();

                M.mme.e_tran.nu_tran_ruta           = 3;
                M.mme.e_tran.vc_conexion_origen     = "SQL";
                M.mme.me_empresa_trans.e_proyecto.nu_id_proyecto = Ssn.nu_id_proyecto;

                M.ls_mme = P_Empresa_Trans.Sel(M.mme);

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
                                            "Razón Social",
                                            "RUC",
                                            "Fecha registro",
                                            "Usuario registro",
                                            "Estado"
                                        };

                    Cell Celda;

                    Sheet Hoja = hssfworkbook.CreateSheet("Empresa de Transporte");

                    //-|> TÍTULO DE DOCUMENTO
                    Font FuenteTitulo = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.NORMAL, IndexedColors.GREEN.Index, 12);
                    CellStyle CssCeldaTitulo = Excel.CssCelda(hssfworkbook, FuenteTitulo, HorizontalAlignment.CENTER, VerticalAlignment.CENTER, IndexedColors.WHITE.Index);

                    Row FilaTitulo = Hoja.CreateRow(0);
                    FilaTitulo.HeightInPoints = 25;
                    FilaTitulo.Sheet.AddMergedRegion((new CellRangeAddress(0, 0, 0, 3)));

                    Celda = Excel.CeldaText(FilaTitulo, 0, CssCeldaTitulo, Ssn.vc_desc_proyecto + " - EMPRESAS DE TRANSPORTE");


                    //-|> CABECERA DE DOCUMENTO
                    Font FuenteEtiqueta = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.BOLD, IndexedColors.BLACK.Index, 8);
                    CellStyle CssCeldaEtiqueta = Excel.CssCelda(hssfworkbook, FuenteEtiqueta, HorizontalAlignment.LEFT, VerticalAlignment.CENTER, IndexedColors.WHITE.Index);

                    Font FuenteValor = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.NORMAL, IndexedColors.BLACK.Index, 8);
                    CellStyle CssCeldaValor = Excel.CssCelda(hssfworkbook, FuenteValor, HorizontalAlignment.LEFT, VerticalAlignment.CENTER, IndexedColors.WHITE.Index);

                    Row FilaEncabezado = Hoja.CreateRow(1);
                    FilaEncabezado.HeightInPoints = 20;

                    Celda = Excel.CeldaText(FilaEncabezado, 0, CssCeldaEtiqueta, "Usuario");
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

                        Celda = Excel.CeldaText(FilaData, 0, CssCeldaTexto2, item.me_empresa_trans.e_empresa_trans.vc_cod_empresa_trans);
                        Celda = Excel.CeldaText(FilaData, 1, CssCeldaTexto, item.me_empresa_trans.e_empresa_trans.vc_desc_empresa_trans);
                        Celda = Excel.CeldaText(FilaData, 2, CssCeldaTexto2, item.me_empresa_trans.e_empresa_trans.vc_ruc);
                        Celda = Excel.CeldaDateTime(FilaData, 3, CssCeldaTexto, item.e_tran.dt_tran_fech_regi);
                        Celda = Excel.CeldaText(FilaData, 4, CssCeldaTexto, item.e_tran.vc_tran_usua_regi);
                        Celda = Excel.CeldaText(FilaData, 5, CssCeldaTexto2, item.e_tran.ch_tran_stdo_regi);
                    }



                    for (int c = 0; c < Cabecera.Length; c++)
                    {
                        Hoja.AutoSizeColumn(c, true);
                    }

                }
                writer.Flush();
                MemoryStream file = new MemoryStream();
                hssfworkbook.Write(file);

                return File(file.ToArray(), "application/vnd.ms-excel", "Empresas_de_Transporte.xls");
            }
            catch (Exception e)
            {
                Ssn.vc_master = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista = e.Message;

                return Redirect("/ErrorInterno");
            }
        }
    }
}