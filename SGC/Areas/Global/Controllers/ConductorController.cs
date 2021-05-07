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
using NPOI.SS.Util;

using SGC.Recursos.Metodos;

using CrystalDecisions.Shared;
using CrystalDecisions.CrystalReports.Engine;
using CrystalDecisions.Web.HtmlReportRender;
using System.Configuration;

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
            catch (Exception)
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
                                            "Nombre Completo",
                                            "Apellido Paterno",
                                            "Apellido Materno",
                                            "Nombres",
                                            "Tipo Doc. Identidad",
                                            "Nro. Doc. Identidad",
                                            "Empresa Transporte",
                                            "Licencia",
                                            "Nro. Padrón",
                                            "Nro. Placa",
                                            "Propietario",
                                            "Nro. Telefóno",
                                            "Dirección",
                                            "Grupo Sanguíneo",
                                            "Restricciones",
                                            "Fecha Inicio",
                                            "Fecha Final",
                                            "Clase Licencia",
                                            "Categoria Licencia",
                                            "Tipo Servicio"
                                        };

                    ICell Celda;

                    ISheet Hoja = hssfworkbook.CreateSheet("Reporte");

                    //-|> TÍTULO DE DOCUMENTO
                    IFont FuenteTitulo = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.Normal, IndexedColors.Green.Index, 12);
                    ICellStyle CssCeldaTitulo = Excel.CssCelda(hssfworkbook, FuenteTitulo, HorizontalAlignment.Center, VerticalAlignment.Center, IndexedColors.White.Index);

                    IRow FilaTitulo = Hoja.CreateRow(0);
                    FilaTitulo.HeightInPoints = 25;
                    FilaTitulo.Sheet.AddMergedRegion((new CellRangeAddress(0, 0, 0, 3)));

                    Celda = Excel.CeldaText(FilaTitulo, 0, CssCeldaTitulo, "REPORTE DE CARNÉS");


                    //-|> CABECERA DE DOCUMENTO
                    IFont FuenteEtiqueta = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.Bold, IndexedColors.Black.Index, 8);
                    ICellStyle CssCeldaEtiqueta = Excel.CssCelda(hssfworkbook, FuenteEtiqueta, HorizontalAlignment.Left, VerticalAlignment.Center, IndexedColors.White.Index);

                    IFont FuenteValor = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.Normal, IndexedColors.Black.Index, 8);
                    ICellStyle CssCeldaValor = Excel.CssCelda(hssfworkbook, FuenteValor, HorizontalAlignment.Left, VerticalAlignment.Center, IndexedColors.White.Index);

                    IRow FilaEncabezado = Hoja.CreateRow(1);
                    FilaEncabezado.HeightInPoints = 20;

                    Celda = Excel.CeldaText(FilaEncabezado, 0, CssCeldaEtiqueta, "Publicado por: ");
                    Celda = Excel.CeldaText(FilaEncabezado, 1, CssCeldaValor, Ssn.vc_usuario.ToUpper());


                    //-|> CABECERA DE TABLA
                    IFont FuenteCabeceraTabla = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.Bold, IndexedColors.White.Index, 8);
                    ICellStyle CssCeldaCabeceraTabla = Excel.CssCelda(hssfworkbook, FuenteCabeceraTabla, HorizontalAlignment.Center, VerticalAlignment.Center, IndexedColors.Blue.Index);

                    IRow FilaCabeceraTabla = Hoja.CreateRow(2);
                    FilaCabeceraTabla.HeightInPoints = 20;

                    for (int c = 0; c < Cabecera.Length; c++)
                    {
                        Celda = Excel.CeldaText(FilaCabeceraTabla, c, CssCeldaCabeceraTabla, Cabecera[c]);
                    }


                    //-|> DATA
                    IFont FuenteTexto = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.Normal, IndexedColors.Black.Index, 8);
                    ICellStyle CssCeldaTexto = Excel.CssCelda(hssfworkbook, FuenteTexto, HorizontalAlignment.Left, VerticalAlignment.Center, IndexedColors.White.Index);
                    ICellStyle CssCeldaTexto2 = Excel.CssCelda(hssfworkbook, FuenteTexto, HorizontalAlignment.Center, VerticalAlignment.Center, IndexedColors.White.Index);

                    IFont FuenteNumero = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.Normal, IndexedColors.Black.Index, 8);
                    ICellStyle CssCeldaNumero = Excel.CssCelda(hssfworkbook, FuenteNumero, HorizontalAlignment.Right, VerticalAlignment.Center, IndexedColors.White.Index);

                    for (int i = 0; i < M.ls_mme.Count; i++)
                    {
                        var item = M.ls_mme[i];

                        IRow FilaData = Hoja.CreateRow(i + 3);
                        FilaData.HeightInPoints = 20;

                        Celda = Excel.CeldaText(FilaData, 0, CssCeldaTexto, item.me_conductor.e_conductor.vc_cod_conductor);
                        Celda = Excel.CeldaText(FilaData, 1, CssCeldaTexto2, item.me_conductor.e_conductor.vc_nombre_completo);
                        Celda = Excel.CeldaText(FilaData, 2, CssCeldaTexto2, item.me_conductor.e_conductor.vc_apellido_paterno);
                        Celda = Excel.CeldaText(FilaData, 3, CssCeldaTexto2, item.me_conductor.e_conductor.vc_apellido_materno);
                        Celda = Excel.CeldaText(FilaData, 4, CssCeldaTexto2, item.me_conductor.e_conductor.vc_nombres);
                        Celda = Excel.CeldaText(FilaData, 5, CssCeldaTexto, item.me_conductor.e_tipo_doc_identidad.vc_desc_tipo_doc_identidad);
                        Celda = Excel.CeldaText(FilaData, 6, CssCeldaTexto, item.me_conductor.e_conductor.vc_nro_doc_identidad);
                        Celda = Excel.CeldaText(FilaData, 7, CssCeldaTexto, item.me_conductor.e_empresa_trans.vc_desc_empresa_trans);
                        Celda = Excel.CeldaText(FilaData, 8, CssCeldaTexto, item.me_conductor.e_conductor.vc_nro_licencia);
                        Celda = Excel.CeldaText(FilaData, 9, CssCeldaTexto, item.me_conductor.e_conductor.vc_nro_padron);
                        Celda = Excel.CeldaText(FilaData, 10, CssCeldaTexto, item.me_conductor.e_conductor.vc_nro_placa);
                        Celda = Excel.CeldaText(FilaData, 11, CssCeldaTexto, item.me_conductor.e_conductor.vc_nombre_propietario);
                        Celda = Excel.CeldaText(FilaData, 12, CssCeldaTexto, item.me_conductor.e_conductor.vc_nro_telefono);
                        Celda = Excel.CeldaText(FilaData, 13, CssCeldaTexto, item.me_conductor.e_conductor.vc_direccion);
                        Celda = Excel.CeldaText(FilaData, 14, CssCeldaTexto, item.me_conductor.e_grupo_sanguineo.vc_desc_grupo_sanguineo);
                        Celda = Excel.CeldaText(FilaData, 15, CssCeldaTexto, item.me_conductor.e_conductor.vc_restricciones);
                        Celda = Excel.CeldaDate(FilaData, 16, CssCeldaTexto, item.me_conductor.e_conductor.dt_fec_inicio);
                        Celda = Excel.CeldaDate(FilaData, 17, CssCeldaTexto, item.me_conductor.e_conductor.dt_fec_final);
                        Celda = Excel.CeldaText(FilaData, 18, CssCeldaTexto, item.me_conductor.e_clase_licencia.vc_desc_clase_licencia);
                        Celda = Excel.CeldaText(FilaData, 19, CssCeldaTexto, item.me_conductor.e_categoria_licencia.vc_desc_categoria_licencia);
                        Celda = Excel.CeldaText(FilaData, 20, CssCeldaTexto, item.me_conductor.e_tipo_servicio.vc_desc_tipo_servicio);
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

        public ActionResult V_Sel_Conductor()
        {

            ConductorModel M = new ConductorModel();
            try
            {
                M.mme.e_tran.nu_tran_ruta       = 1;
                M.mme.e_tran.vc_conexion_origen = "SQL";

                M.mme.me_conductor.e_proyecto.nu_id_proyecto            = Ssn.nu_id_proyecto;
                M.mme.me_conductor.e_empresa_trans.nu_id_empresa_trans  = null;

                M.ls_mme = P_Conductor.Sel(M.mme);

                M.cb_empresa_transporte = Combos.Empresa_Transporte("SQL", 1, Ssn.vc_usuario, Ssn.nu_id_proyecto);

                return View("V_Consultar", M);
            }
            catch (Exception e)
            {
                Ssn.vc_master = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista = e.Message;
                return Redirect("/ErrorInterno");
            }
        }
        
        public ActionResult AC_Sel_Conductor(ConductorModel M)
        {
            M.mme.e_tran.nu_tran_ruta       = 1;
            M.mme.e_tran.vc_conexion_origen = "SQL";

            M.mme.me_conductor.e_proyecto.nu_id_proyecto    = Ssn.nu_id_proyecto;
            M.mme.me_conductor.e_empresa_trans.nu_id_empresa_trans = M.mme.me_conductor.e_empresa_trans.nu_id_empresa_trans;

            M.ls_mme = P_Conductor.Sel(M.mme);

            return PartialView("VP_Conductor", M);
        }

        public ActionResult V_Get_Conductor(int id)
        {

            ConductorModel M = new ConductorModel();
            try
            {
                M.mme.e_tran.nu_tran_ruta       = 2;
                M.mme.e_tran.vc_conexion_origen = "SQL";

                M.mme.me_conductor.e_proyecto.nu_id_proyecto    = Ssn.nu_id_proyecto;
                M.mme.me_conductor.e_conductor.nu_id_conductor  = id;

                M.mme = P_Conductor.Get(M.mme);

                return View("V_Visualizar", M);
            }
            catch (Exception e)
            {
                Ssn.vc_master = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista = e.Message;
                return Redirect("/ErrorInterno");
            }
        }

        public ActionResult V_Ins_Conductor()
        {

            ConductorModel M = new ConductorModel();
            try
            {
                M.mme_empresa_trans.e_tran.nu_tran_ruta         = 1;
                M.mme_empresa_trans.e_tran.vc_conexion_origen   = "SQL";
                M.mme_empresa_trans.e_tran.ch_tran_stdo_regi    = "A";
                M.mme_empresa_trans.me_empresa_trans.e_proyecto.nu_id_proyecto  = Ssn.nu_id_proyecto;
                M.ls_mme_empresa_trans = P_Empresa_Trans.Sel(M.mme_empresa_trans);

                
                M.cb_tipo_doc_identidad = Combos.Tipo_Doc_Identidad("SQL", 1, Ssn.vc_usuario);
                M.cb_grupo_sanguineo    = Combos.Grupo_Sanguineo("SQL", 1, Ssn.vc_usuario);
                M.cb_clase_licencia     = Combos.Clase_Licencia("SQL", 1, Ssn.vc_usuario);
                M.cb_categoria_licencia = Combos.Categoria_Licencia("SQL", 1, Ssn.vc_usuario);
                M.cb_tipo_servicio      = Combos.Tipo_Servicio("SQL", 1, Ssn.vc_usuario);
                M.cb_centro_medico      = Combos.Centro_Medico("SQL", 1, Ssn.vc_usuario, Ssn.nu_id_proyecto);

                return View("V_Crear", M);
            }
            catch (Exception e)
            {
                Ssn.vc_master = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista = e.Message;
                return Redirect("/ErrorInterno");
            }
        }

        public ActionResult AC_Ins_Conductor(ConductorModel M)
        {
            try
            {
                M.mme.e_tran.nu_tran_ruta       = 1;
                M.mme.e_tran.vc_conexion_origen = "SQL";
                M.mme.e_tran.vc_tran_usua_regi  = Ssn.vc_usuario;

                M.mme.me_conductor.e_proyecto.nu_id_proyecto    = Ssn.nu_id_proyecto;

                var name_file_temp = M.mme.me_conductor.e_conductor.vc_ruta_foto;
                var name_file_final = M.mme.me_conductor.e_conductor.vc_nro_doc_identidad + ".jpg";
                string path_temp = System.Web.HttpContext.Current.Server.MapPath("/Recursos/Img/Transportista/Temp/") + name_file_temp;
                string path_final = System.Web.HttpContext.Current.Server.MapPath("/Recursos/Img/Transportista/") + name_file_final;
                if (System.IO.File.Exists(path_final))
                    System.IO.File.Delete(path_final);
                System.IO.File.Copy(path_temp, path_final);
                System.IO.File.Delete(path_temp);

                M.mme.me_conductor.e_conductor.vc_ruta_foto = name_file_final;
                M.mme.e_tran.ch_tran_stdo_regi = "A";
                M.mme = P_Conductor.Ins(M.mme);
            }
            catch (Exception e)
            {
                return Json(App.Error(e.Message, M.mme));
            }
            return Json(App.Exito(M.mme));
        }

        public ActionResult AC_Upd_Conductor(ConductorModel M)
        {
            try
            {
                M.mme.e_tran.nu_tran_ruta       = 1;
                M.mme.e_tran.vc_conexion_origen = "SQL";
                M.mme.e_tran.vc_tran_usua_regi  = Ssn.vc_usuario;
                
                M.mme.me_conductor.e_proyecto.nu_id_proyecto    = Ssn.nu_id_proyecto;

                var name_file_temp = M.mme.me_conductor.e_conductor.vc_ruta_foto;
                var name_file_final = M.mme.me_conductor.e_conductor.vc_nro_doc_identidad + ".jpg";
                string path_temp = System.Web.HttpContext.Current.Server.MapPath("/Recursos/Img/Transportista/Temp/") + name_file_temp;
                string path_final = System.Web.HttpContext.Current.Server.MapPath("/Recursos/Img/Transportista/") + name_file_final;
                if (System.IO.File.Exists(path_temp))
                {
                    if (System.IO.File.Exists(path_final))
                        System.IO.File.Delete(path_final);
                    System.IO.File.Copy(path_temp, path_final);
                    System.IO.File.Delete(path_temp);
                }

                M.mme.me_conductor.e_conductor.vc_ruta_foto = name_file_final;
                M.mme.e_tran.ch_tran_stdo_regi = "A";
                M.mme = P_Conductor.Upd(M.mme);

            }
            catch (Exception e)
            {
                return Json(App.Error(e.Message, M.mme));
            }
            return Json(App.Exito(M.mme));
        }

        public ActionResult AC_UpdEstado_Conductor(int id)
        {
            ConductorModel M = new ConductorModel();
            try
            {
                M.mme.e_tran.nu_tran_ruta       = 1;
                M.mme.e_tran.vc_conexion_origen = "SQL";
                M.mme.e_tran.vc_tran_usua_regi = Ssn.vc_usuario;

                M.mme.me_conductor.e_proyecto.nu_id_proyecto    = Ssn.nu_id_proyecto;
                M.mme.me_conductor.e_conductor.nu_id_conductor  = id;

                M.mme = P_Conductor.UpdEstado(M.mme);

            }
            catch (Exception e)
            {
                return Json(App.Error(e.Message, M.mme));
            }
            return Json(App.Exito(M.mme));
        }

        public ActionResult AC_Exportar_Conductor()
        {
            try
            {
                ConductorModel M = new ConductorModel();

                M.mme.e_tran.nu_tran_ruta       = 4;
                M.mme.e_tran.vc_conexion_origen = "SQL";
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

                    String[] Cabecera = {   "Estado",
                                            "Código",
                                            "Nombre Completo",
                                            "Apellido Paterno",
                                            "Apellido Materno",
                                            "Nombres",
                                            "Tipo Doc. Identidad",
                                            "Nro. Doc. Identidad",
                                            "Empresa Transporte",
                                            "Licencia",
                                            "Nro. Padrón",
                                            "Nro. Placa",
                                            "Propietario",
                                            "Nro. Telefóno",
                                            "Dirección",
                                            "Grupo Sanguíneo",
                                            "Restricciones",
                                            "Fecha Inicio",
                                            "Fecha Final",
                                            "Clase Licencia",
                                            "Categoria Licencia",
                                            "Tipo Servicio",
                                            "Fecha registro",
                                            "Usuario registro",
                                            "Fecha de Nacimiento",
                                            "Fecha certificado",
                                            "Fecha inscripción",
                                            "Fecha inicio curso",
                                            "Fecha final curso",
                                            "Fecha evaluación médica",
                                            "Centro médico"
                                        };

                    ICell Celda;

                    ISheet Hoja = hssfworkbook.CreateSheet("Reporte");

                    //-|> TÍTULO DE DOCUMENTO
                    IFont FuenteTitulo = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.Normal, IndexedColors.Green.Index, 12);
                    ICellStyle CssCeldaTitulo = Excel.CssCelda(hssfworkbook, FuenteTitulo, HorizontalAlignment.Center, VerticalAlignment.Center, IndexedColors.White.Index);

                    IRow FilaTitulo = Hoja.CreateRow(0);
                    FilaTitulo.HeightInPoints = 25;
                    FilaTitulo.Sheet.AddMergedRegion((new CellRangeAddress(0, 0, 0, 3)));

                    Celda = Excel.CeldaText(FilaTitulo, 0, CssCeldaTitulo, Ssn.vc_desc_proyecto + " - CONDUCTORES");


                    //-|> CABECERA DE DOCUMENTO
                    IFont FuenteEtiqueta = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.Bold, IndexedColors.Black.Index, 8);
                    ICellStyle CssCeldaEtiqueta = Excel.CssCelda(hssfworkbook, FuenteEtiqueta, HorizontalAlignment.Left, VerticalAlignment.Center, IndexedColors.White.Index);

                    IFont FuenteValor = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.Normal, IndexedColors.Black.Index, 8);
                    ICellStyle CssCeldaValor = Excel.CssCelda(hssfworkbook, FuenteValor, HorizontalAlignment.Left, VerticalAlignment.Center, IndexedColors.White.Index);

                    IRow FilaEncabezado = Hoja.CreateRow(1);
                    FilaEncabezado.HeightInPoints = 20;

                    Celda = Excel.CeldaText(FilaEncabezado, 0, CssCeldaEtiqueta, "Usuario: ");
                    Celda = Excel.CeldaText(FilaEncabezado, 1, CssCeldaValor, Ssn.vc_usuario.ToUpper());


                    //-|> CABECERA DE TABLA
                    IFont FuenteCabeceraTabla = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.Bold, IndexedColors.White.Index, 8);
                    ICellStyle CssCeldaCabeceraTabla = Excel.CssCelda(hssfworkbook, FuenteCabeceraTabla, HorizontalAlignment.Center, VerticalAlignment.Center, IndexedColors.Blue.Index);

                    IRow FilaCabeceraTabla = Hoja.CreateRow(2);
                    FilaCabeceraTabla.HeightInPoints = 20;

                    for (int c = 0; c < Cabecera.Length; c++)
                    {
                        Celda = Excel.CeldaText(FilaCabeceraTabla, c, CssCeldaCabeceraTabla, Cabecera[c]);
                    }


                    //-|> DATA
                    IFont FuenteTexto = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.Normal, IndexedColors.Black.Index, 8);
                    ICellStyle CssCeldaTexto = Excel.CssCelda(hssfworkbook, FuenteTexto, HorizontalAlignment.Left, VerticalAlignment.Center, IndexedColors.White.Index);
                    ICellStyle CssCeldaTexto2 = Excel.CssCelda(hssfworkbook, FuenteTexto, HorizontalAlignment.Center, VerticalAlignment.Center, IndexedColors.White.Index);

                    IFont FuenteNumero = Excel.Fuente(hssfworkbook, "Arial", FontBoldWeight.Normal, IndexedColors.Black.Index, 8);
                    ICellStyle CssCeldaNumero = Excel.CssCelda(hssfworkbook, FuenteNumero, HorizontalAlignment.Right, VerticalAlignment.Center, IndexedColors.White.Index);

                    for (int i = 0; i < M.ls_mme.Count; i++)
                    {
                        var item = M.ls_mme[i];

                        IRow FilaData = Hoja.CreateRow(i + 3);
                        FilaData.HeightInPoints = 20;

                        Celda = Excel.CeldaText(FilaData, 0, CssCeldaTexto2, item.e_tran.ch_tran_stdo_regi);
                        Celda = Excel.CeldaText(FilaData, 1, CssCeldaTexto, item.me_conductor.e_conductor.vc_cod_conductor);
                        Celda = Excel.CeldaText(FilaData, 2, CssCeldaTexto2, item.me_conductor.e_conductor.vc_nombre_completo);
                        Celda = Excel.CeldaText(FilaData, 3, CssCeldaTexto2, item.me_conductor.e_conductor.vc_apellido_paterno);
                        Celda = Excel.CeldaText(FilaData, 4, CssCeldaTexto2, item.me_conductor.e_conductor.vc_apellido_materno);
                        Celda = Excel.CeldaText(FilaData, 5, CssCeldaTexto2, item.me_conductor.e_conductor.vc_nombres);
                        Celda = Excel.CeldaText(FilaData, 6, CssCeldaTexto, item.me_conductor.e_tipo_doc_identidad.vc_desc_tipo_doc_identidad);
                        Celda = Excel.CeldaText(FilaData, 7, CssCeldaTexto, item.me_conductor.e_conductor.vc_nro_doc_identidad);
                        Celda = Excel.CeldaText(FilaData, 8, CssCeldaTexto, item.me_conductor.e_empresa_trans.vc_desc_empresa_trans);
                        Celda = Excel.CeldaText(FilaData, 9, CssCeldaTexto, item.me_conductor.e_conductor.vc_nro_licencia);
                        Celda = Excel.CeldaText(FilaData, 10, CssCeldaTexto, item.me_conductor.e_conductor.vc_nro_padron);
                        Celda = Excel.CeldaText(FilaData, 11, CssCeldaTexto, item.me_conductor.e_conductor.vc_nro_placa);
                        Celda = Excel.CeldaText(FilaData, 12, CssCeldaTexto, item.me_conductor.e_conductor.vc_nombre_propietario);
                        Celda = Excel.CeldaText(FilaData, 13, CssCeldaTexto, item.me_conductor.e_conductor.vc_nro_telefono);
                        Celda = Excel.CeldaText(FilaData, 14, CssCeldaTexto, item.me_conductor.e_conductor.vc_direccion);
                        Celda = Excel.CeldaText(FilaData, 15, CssCeldaTexto, item.me_conductor.e_grupo_sanguineo.vc_desc_grupo_sanguineo);
                        Celda = Excel.CeldaText(FilaData, 16, CssCeldaTexto, item.me_conductor.e_conductor.vc_restricciones);
                        Celda = Excel.CeldaDate(FilaData, 17, CssCeldaTexto, item.me_conductor.e_conductor.dt_fec_inicio);
                        Celda = Excel.CeldaDate(FilaData, 18, CssCeldaTexto, item.me_conductor.e_conductor.dt_fec_final);
                        Celda = Excel.CeldaText(FilaData, 19, CssCeldaTexto, item.me_conductor.e_clase_licencia.vc_desc_clase_licencia);
                        Celda = Excel.CeldaText(FilaData, 20, CssCeldaTexto, item.me_conductor.e_categoria_licencia.vc_desc_categoria_licencia);
                        Celda = Excel.CeldaText(FilaData, 21, CssCeldaTexto, item.me_conductor.e_tipo_servicio.vc_desc_tipo_servicio);
                        Celda = Excel.CeldaDateTime(FilaData, 22, CssCeldaTexto, item.e_tran.dt_tran_fech_regi);
                        Celda = Excel.CeldaText(FilaData, 23, CssCeldaTexto, item.e_tran.vc_tran_usua_regi);
                        Celda = Excel.CeldaDate(FilaData, 24, CssCeldaTexto, item.me_conductor.e_conductor.dt_fec_nacimiento);
                        Celda = Excel.CeldaDate(FilaData, 25, CssCeldaTexto, item.me_conductor.e_conductor.dt_fec_certificado);
                        Celda = Excel.CeldaDate(FilaData, 26, CssCeldaTexto, item.me_conductor.e_conductor.dt_fec_inscripcion);
                        Celda = Excel.CeldaDate(FilaData, 27, CssCeldaTexto, item.me_conductor.e_conductor.dt_fec_inicio_curso);
                        Celda = Excel.CeldaDate(FilaData, 28, CssCeldaTexto, item.me_conductor.e_conductor.dt_fec_final_curso);
                        Celda = Excel.CeldaDate(FilaData, 29, CssCeldaTexto, item.me_conductor.e_conductor.dt_fec_evaluacion_medica);
                        Celda = Excel.CeldaText(FilaData, 30, CssCeldaTexto, item.me_conductor.e_centro_medico.vc_desc_centro_medico);
                    }



                    for (int c = 0; c < Cabecera.Length; c++)
                    {
                        Hoja.AutoSizeColumn(c, true);
                    }

                }
                writer.Flush();
                MemoryStream file = new MemoryStream();
                hssfworkbook.Write(file);

                return File(file.ToArray(), "application/vnd.ms-excel", "Conductores.xls");
            }
            catch (Exception e)
            {
                Ssn.vc_master = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista = e.Message;

                return Redirect("/ErrorInterno");
            }
        }

        public ActionResult AC_Conductor_Cargar_Imagen_Temp()
        {
            ConductorModel M = new ConductorModel();
            try
            {
                foreach (string file in Request.Files)
                {
                    HttpPostedFileBase hpf = Request.Files[file] as HttpPostedFileBase;

                    if (hpf.ContentLength == 0)
                        continue;

                    string str_hora_sesion = DateTime.Now.ToString().Replace("-", "").Replace(":", "").Replace(" ", "").Replace(".", "").Replace("/", "");
                    string str_nombre_archivo = Ssn.nu_id_proyecto.ToString() + "_" + str_hora_sesion + "_" + hpf.FileName;
                    M.mme.me_conductor.e_usuario.vc_hora_sesion = str_hora_sesion;
                    M.mme.me_conductor.e_conductor.vc_ruta_foto = str_nombre_archivo;

                    string SaveFileName = Path.Combine(Server.MapPath("/Recursos/Img/Transportista/Temp/"), str_nombre_archivo);
                    hpf.SaveAs(SaveFileName);

                }
            }
            catch (Exception e)
            {
                return Json(App.Error(e.Message, M));
            }
            return Json(App.Exito(M));
        }

        public ActionResult AC_Conductor_Eliminar_Imagen_Temp(ConductorModel M)
        {
            try
            {
                var name_file = M.mme.me_conductor.e_conductor.vc_ruta_foto;
                string path = System.Web.HttpContext.Current.Server.MapPath("/Recursos/Img/Transportista/Temp/") + name_file;
                System.IO.File.Delete(path);

            }
            catch (Exception e)
            {
                return Json(App.Error(e.Message, M));
            }
            return Json(App.Exito(M));
        }

        public ActionResult V_Upd_Conductor(int? id)
        {

            ConductorModel M = new ConductorModel();
            try
            {
                M.mme.e_tran.nu_tran_ruta         = 1;
                M.mme.e_tran.vc_conexion_origen   = "SQL";
                M.mme.me_conductor.e_proyecto.nu_id_proyecto    = Ssn.nu_id_proyecto;
                M.mme.me_conductor.e_conductor.nu_id_conductor  = id;
                M.mme = P_Conductor.Get(M.mme);


                M.mme_empresa_trans.e_tran.nu_tran_ruta         = 1;
                M.mme_empresa_trans.e_tran.vc_conexion_origen   = "SQL";
                M.mme_empresa_trans.e_tran.ch_tran_stdo_regi    = "A";
                M.mme_empresa_trans.me_empresa_trans.e_proyecto.nu_id_proyecto = Ssn.nu_id_proyecto;
                M.ls_mme_empresa_trans = P_Empresa_Trans.Sel(M.mme_empresa_trans);


                M.cb_tipo_doc_identidad     = Combos.Tipo_Doc_Identidad("SQL", 1, Ssn.vc_usuario);
                M.cb_grupo_sanguineo        = Combos.Grupo_Sanguineo("SQL", 1, Ssn.vc_usuario);
                M.cb_clase_licencia         = Combos.Clase_Licencia("SQL", 1, Ssn.vc_usuario);
                M.cb_categoria_licencia     = Combos.Categoria_Licencia("SQL", 1, Ssn.vc_usuario);
                M.cb_tipo_servicio          = Combos.Tipo_Servicio("SQL", 1, Ssn.vc_usuario);
                M.cb_centro_medico          = Combos.Centro_Medico("SQL", 1, Ssn.vc_usuario, Ssn.nu_id_proyecto);

                return View("V_Actualizar", M);
            }
            catch (Exception e)
            {
                Ssn.vc_master = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista = e.Message;
                return Redirect("/ErrorInterno");
            }
        }

        public ActionResult V_Sel_ImpresionCarne()
        {

            ConductorModel M = new ConductorModel();
            try
            {
                M.mme.e_tran.nu_tran_ruta       = 5;
                M.mme.e_tran.vc_conexion_origen = "SQL";

                M.mme.me_conductor.e_proyecto.nu_id_proyecto            = Ssn.nu_id_proyecto;
                M.mme.me_conductor.e_conductor.nu_id_conductor          = null;
                M.mme.me_conductor.e_empresa_trans.nu_id_empresa_trans  = null;

                M.ls_mme = P_Conductor.Sel(M.mme);


                M.cb_empresa_transporte = Combos.Empresa_Transporte("SQL", 1, Ssn.vc_usuario, Ssn.nu_id_proyecto);


                return View("V_ImpresionCarne", M);
            }
            catch (Exception e)
            {
                Ssn.vc_master = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista = e.Message;
                return Redirect("/ErrorInterno");
            }
        }

        public ActionResult AC_Sel_ImpresionCarne(ConductorModel M)
        {
            M.mme.e_tran.nu_tran_ruta = 2;
            M.mme.e_tran.vc_conexion_origen = "SQL";

            M.mme.me_conductor.e_proyecto.nu_id_proyecto = Ssn.nu_id_proyecto;
            M.mme.me_conductor.e_conductor.nu_id_conductor = null;
            M.mme.me_conductor.e_empresa_trans.nu_id_empresa_trans = M.mme.me_conductor.e_empresa_trans.nu_id_empresa_trans;

            M.ls_mme = P_Conductor.Sel(M.mme);

            return PartialView("VP_ImpresionCarne", M);
        }

        public ActionResult AC_ImprimirCarneConductor(string ids)
        {
            ReportDocument Rep = new ReportDocument();
            try
            {
                string str_nombre = "RepImpresionCarne " + Ssn.vc_desc_proyecto + ".rpt";
                string strRptPath = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Reportes/") + str_nombre;
                Archivos.ExisteArchivo(strRptPath, str_nombre);
                Rep.Load(strRptPath);

                Crystal_Reports.RefrescarConexion(Rep);

                Rep.SetParameterValue("@K_NU_ID_PROYECTO", Ssn.nu_id_proyecto);
                Rep.SetParameterValue("@K_VC_IDS_CONDUCTORES", ids);
                string path = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Img/Transportista/");
                Rep.SetParameterValue("RutaImagen", path);
                Rep.ExportToHttpResponse(ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Response, false, str_nombre);
                Rep.Close();
                Rep.Dispose();
            }
            catch (Exception ex)
            {
                Rep.Close();
                Rep.Dispose();
                return View("Error", new HandleErrorInfo(ex, HttpContext.Request.RequestContext.RouteData.Values["controller"].ToString(), HttpContext.Request.RequestContext.RouteData.Values["action"].ToString()));
            }
            return Json("true");
        }

        public ActionResult AC_ImprimirFrontalCarneConductor(string ids)
        {
            ReportDocument Rep = new ReportDocument();
            try
            {
                string str_nombre = "RepImpresionCarneFrontal " + Ssn.vc_desc_proyecto + ".rpt";
                string strRptPath = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Reportes/") + str_nombre;
                Archivos.ExisteArchivo(strRptPath, str_nombre);
                Rep.Load(strRptPath);

                Crystal_Reports.RefrescarConexion(Rep);

                Rep.SetParameterValue("@K_NU_ID_PROYECTO", Ssn.nu_id_proyecto);
                Rep.SetParameterValue("@K_VC_IDS_CONDUCTORES", ids);
                string path = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Img/Transportista/");
                Rep.SetParameterValue("RutaImagen", path);
                Rep.ExportToHttpResponse(ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Response, false, str_nombre);
                Rep.Close();
                Rep.Dispose();
            }
            catch (Exception ex)
            {
                Rep.Close();
                Rep.Dispose();
                return View("Error", new HandleErrorInfo(ex, HttpContext.Request.RequestContext.RouteData.Values["controller"].ToString(), HttpContext.Request.RequestContext.RouteData.Values["action"].ToString()));
            }
            return Json("true");
        }

        public ActionResult AC_ImprimirPosteriorCarneConductor(string ids)
        {
            ReportDocument Rep = new ReportDocument();
            try
            {
                string str_nombre = "RepImpresionCarnePosterior " + Ssn.vc_desc_proyecto + ".rpt";
                string strRptPath = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Reportes/") + str_nombre;
                Archivos.ExisteArchivo(strRptPath, str_nombre);
                Rep.Load(strRptPath);

                Crystal_Reports.RefrescarConexion(Rep);

                Rep.SetParameterValue("@K_NU_ID_PROYECTO", Ssn.nu_id_proyecto);
                Rep.SetParameterValue("@K_VC_IDS_CONDUCTORES", ids);
                string path = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Img/Transportista/");
                Rep.SetParameterValue("RutaImagen", path);
                Rep.ExportToHttpResponse(ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Response, false, str_nombre);
                Rep.Close();
                Rep.Dispose();
            }
            catch (Exception ex)
            {
                Rep.Close();
                Rep.Dispose();
                return View("Error", new HandleErrorInfo(ex, HttpContext.Request.RequestContext.RouteData.Values["controller"].ToString(), HttpContext.Request.RequestContext.RouteData.Values["action"].ToString()));
            }
            return Json("true");
        }

        public ActionResult AC_ImprimirDeclaracionJuradaCarneConductor(string ids)
        {
            ReportDocument Rep = new ReportDocument();
            try
            {
                string str_nombre = "RepImpresionDeclaracionJurada " + Ssn.vc_desc_proyecto + ".rpt";
                string strRptPath = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Reportes/") + str_nombre;
                Archivos.ExisteArchivo(strRptPath, str_nombre);
                Rep.Load(strRptPath);

                Crystal_Reports.RefrescarConexion(Rep);

                Rep.SetParameterValue("@K_NU_ID_PROYECTO", Ssn.nu_id_proyecto);
                Rep.SetParameterValue("@K_VC_IDS_CONDUCTORES", ids);
                string path = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Img/Transportista/");
                Rep.SetParameterValue("RutaImagen", path);
                Rep.ExportToHttpResponse(ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Response, false, str_nombre);
                Rep.Close();
                Rep.Dispose();
            }
            catch (Exception ex)
            {
                Rep.Close();
                Rep.Dispose();
                return View("Error", new HandleErrorInfo(ex, HttpContext.Request.RequestContext.RouteData.Values["controller"].ToString(), HttpContext.Request.RequestContext.RouteData.Values["action"].ToString()));
            }
            return Json("true");
        }

        public ActionResult AC_ImprimirFichaInscripcionCarneConductor(string ids)
        {
            ReportDocument Rep = new ReportDocument();
            try
            {
                string str_nombre = "RepImpresionFichaInscripcion " + Ssn.vc_desc_proyecto + ".rpt";
                string strRptPath = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Reportes/") + str_nombre;
                Archivos.ExisteArchivo(strRptPath, str_nombre);
                Rep.Load(strRptPath);

                Crystal_Reports.RefrescarConexion(Rep);

                Rep.SetParameterValue("@K_NU_ID_PROYECTO", Ssn.nu_id_proyecto);
                Rep.SetParameterValue("@K_VC_IDS_CONDUCTORES", ids);
                string path = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Img/Transportista/");
                Rep.SetParameterValue("RutaImagen", path);
                Rep.ExportToHttpResponse(ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Response, false, str_nombre);
                Rep.Close();
                Rep.Dispose();
            }
            catch (Exception ex)
            {
                Rep.Close();
                Rep.Dispose();
                return View("Error", new HandleErrorInfo(ex, HttpContext.Request.RequestContext.RouteData.Values["controller"].ToString(), HttpContext.Request.RequestContext.RouteData.Values["action"].ToString()));
            }
            return Json("true");
        }

        public ActionResult AC_ImprimirSolicitudCarneConductor(string ids)
        {
            ReportDocument Rep = new ReportDocument();
            try
            {
                string str_nombre = "RepImpresionSolicitud " + Ssn.vc_desc_proyecto + ".rpt";
                string strRptPath = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Reportes/") + str_nombre;
                Archivos.ExisteArchivo(strRptPath, str_nombre);
                Rep.Load(strRptPath);

                Crystal_Reports.RefrescarConexion(Rep);

                Rep.SetParameterValue("@K_NU_ID_PROYECTO", Ssn.nu_id_proyecto);
                Rep.SetParameterValue("@K_VC_IDS_CONDUCTORES", ids);
                string path = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Img/Transportista/");
                Rep.SetParameterValue("RutaImagen", path);
                Rep.ExportToHttpResponse(ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Response, false, str_nombre);
                Rep.Close();
                Rep.Dispose();
            }
            catch (Exception ex)
            {
                Rep.Close();
                Rep.Dispose();
                return View("Error", new HandleErrorInfo(ex, HttpContext.Request.RequestContext.RouteData.Values["controller"].ToString(), HttpContext.Request.RequestContext.RouteData.Values["action"].ToString()));
            }
            return Json("true");
        }

        public ActionResult AC_ImprimirTarjetaCarneConductor(string ids)
        {
            ReportDocument Rep = new ReportDocument();
            try
            {
                string str_nombre = "RepImpresionCarneTarjeta " + Ssn.vc_desc_proyecto + ".rpt";
                string strRptPath = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Reportes/") + str_nombre;
                Archivos.ExisteArchivo(strRptPath, str_nombre);
                Rep.Load(strRptPath);

                Crystal_Reports.RefrescarConexion(Rep);

                Rep.SetParameterValue("@K_NU_ID_PROYECTO", Ssn.nu_id_proyecto);
                Rep.SetParameterValue("@K_VC_IDS_CONDUCTORES", ids);
                string path = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Img/Transportista/");
                Rep.SetParameterValue("RutaImagen", path);
                Rep.ExportToHttpResponse(ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Response, false, str_nombre);
                Rep.Close();
                Rep.Dispose();
            }
            catch (Exception ex)
            {
                Rep.Close();
                Rep.Dispose();
                return View("Error", new HandleErrorInfo(ex, HttpContext.Request.RequestContext.RouteData.Values["controller"].ToString(), HttpContext.Request.RequestContext.RouteData.Values["action"].ToString()));
            }
            return Json("true");
        }

        public ActionResult AC_Subir_Archivo_Conductor_Adjunto(decimal? id_conductor)
        {
            try
            {
                foreach (string file in Request.Files)
                {
                    HttpPostedFileBase hpf = Request.Files[file] as HttpPostedFileBase;

                    if (hpf.ContentLength > 0)
                    {
                        string[] nombre = hpf.FileName.Split('.');
                        string extension = "";
                        if (nombre.LongLength > 1)
                        {
                            extension = "." + nombre[nombre.LongLength - 1];
                        }



                        string SavedFileName = Path.Combine(Server.MapPath("~/Recursos/Img/Conductor/"), Ssn.nu_id_proyecto.ToString() + '_' + id_conductor.ToString() + "_adjunto" + extension);

                        if (!Directory.Exists(Server.MapPath("~/Recursos/Img/Conductor/")))
                            Directory.CreateDirectory(Server.MapPath("~/Recursos/Img/Conductor/"));

                        if (new FileInfo(SavedFileName).Exists)
                            System.IO.File.Delete(SavedFileName);

                        hpf.SaveAs(SavedFileName);
                    }

                }
            }
            catch (Exception)
            {
                return Json("Upload failed");
            }

            return Json("El archivo se cargó existosamente.");
        }

        public ActionResult AC_Eliminar_Archivo_Conductor_Adjunto(decimal? id_conductor)
        {
            try
            {
                string SavedFileName = Path.Combine(Server.MapPath("~/Recursos/Img/Conductor/"), Ssn.nu_id_proyecto.ToString() + '_' + id_conductor.ToString() + "_adjunto.pdf");

                if (new FileInfo(SavedFileName).Exists)
                    System.IO.File.Delete(SavedFileName);
            }
            catch (Exception)
            {
                return Json("Upload failed");
            }

            return Json("El archivo se elimino existosamente.");
        }
        
        public ActionResult AC_ImprimirDeclaracionPerdidaCarneConductor(string ids)
        {
            ReportDocument Rep = new ReportDocument();
            try
            {
                string str_nombre = "RepImpresionDeclaracionPerdida " + Ssn.vc_desc_proyecto + ".rpt";
                string strRptPath = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Reportes/") + str_nombre;
                Archivos.ExisteArchivo(strRptPath, str_nombre);
                Rep.Load(strRptPath);

                Crystal_Reports.RefrescarConexion(Rep);

                Rep.SetParameterValue("@K_NU_ID_PROYECTO", Ssn.nu_id_proyecto);
                Rep.SetParameterValue("@K_VC_IDS_CONDUCTORES", ids);
                string path = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Img/Transportista/");
                Rep.SetParameterValue("RutaImagen", path);
                Rep.ExportToHttpResponse(ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Response, false, str_nombre);
                Rep.Close();
                Rep.Dispose();
            }
            catch (Exception ex)
            {
                Rep.Close();
                Rep.Dispose();
                return View("Error", new HandleErrorInfo(ex, HttpContext.Request.RequestContext.RouteData.Values["controller"].ToString(), HttpContext.Request.RequestContext.RouteData.Values["action"].ToString()));
            }
            return Json("true");
        }
    }
}