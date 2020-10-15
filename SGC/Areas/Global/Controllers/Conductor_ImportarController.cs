using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Entidad.Sistema;
using MacroEntidad;
using MultiEntidad.Solucion;
using SGC.Areas.Global.Models;
using SGC.Areas.Sistema.Controllers.Base;
using SGC.Areas.Sistema.Models;
using Procedimiento;
using System.IO;
using NPOI.HSSF.UserModel;
using NPOI.HPSF;
using NPOI.SS.UserModel;
using NPOI.SS.Util;
using NPOI.XSSF.UserModel;

using NPOI.HSSF.Util;
using OfficeOpenXml;

using SGC.Recursos.Metodos;

using CrystalDecisions.Shared;
using CrystalDecisions.CrystalReports.Engine;
using CrystalDecisions.Web.HtmlReportRender;
using System.Configuration;

namespace SGC.Areas.Global.Controllers
{
    public class Conductor_ImportarController : ControladorModeloBase<UsuarioModel>
    {
        // GET: Global/Conductor_Importar
        public ActionResult V_Imp_Conductor()
        {
            try
            {

                return View("V_Imp_Conductor");
            }
            catch (Exception e)
            {
                Ssn.vc_master = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista = e.Message;
                return Redirect("/ErrorInterno");
            }
        }

        public ActionResult AC_Descargar_Plantilla_Importacion_Conductor()
        {
            try
            {
                Conductor_ImportarModel M = new Conductor_ImportarModel();

                E_Transaccion e_tran = new E_Transaccion();
                e_tran.nu_tran_ruta = 1;
                e_tran.vc_conexion_origen = "SQL";
                e_tran.ch_tran_stdo_regi = "A";

                M.mme_tipo_doc_identidad.e_tran = e_tran;
                M.ls_mme_tipo_doc_identidad = P_Tipo_Doc_Identidad.Sel(M.mme_tipo_doc_identidad);

                M.mme_empresa_trans.e_tran = e_tran;
                M.mme_empresa_trans.me_empresa_trans.e_proyecto.nu_id_proyecto = Ssn.nu_id_proyecto;
                M.ls_mme_empresa_trans = P_Empresa_Trans.Sel(M.mme_empresa_trans);

                M.mme_clase_licencia.e_tran = e_tran;
                M.ls_mme_clase_licencia = P_Clase_Licencia.Sel(M.mme_clase_licencia);

                M.mme_categoria_licencia.e_tran = e_tran;
                M.ls_mme_categoria_licencia = P_Categoria_Licencia.Sel(M.mme_categoria_licencia);

                M.mme_tipo_servicio.e_tran = e_tran;
                M.ls_mme_tipo_servicio = P_Tipo_Servicio.Sel(M.mme_tipo_servicio);

                M.mme_grupo_sanguineo.e_tran = e_tran;
                M.ls_mme_grupo_sanguineo = P_Grupo_Sanguineo.Sel(M.mme_grupo_sanguineo);


                var output = new MemoryStream();
                var writer = new StreamWriter(output);
                //HSSFWorkbook hssfworkbook = new HSSFWorkbook();
                IWorkbook hssfworkbook = new XSSFWorkbook();

                //Nombre de la cabecera - Descripción - Obligatorio
                String[,] Cabecera = { {"Tipo de Importación", "C = Crear, A = Actualizar", "1"  },
                                       {"Código", "Sólo llenar cuando el tipo de importación es 'A'", "0" },
                                       {"Apellido Paterno", "Máximo 50 caracteres.", "1" },
                                       {"Apellido Materno", "Máximo 50 caracteres.", "1" },
                                       {"Nombres", "Máximo 150 caracteres.", "1" },
                                       {"Tipo Doc. Identidad", "Según pestaña TDI; indicar la descripción.", "1" },
                                       {"Nro. Doc. Identidad", "Máximo 20 caracteres.", "1" },
                                       {"Empresa de Transporte", "Según pestaña de Empresas de Transporte; indicar la descripción.", "1" },
                                       {"Fecha Inicio", "Fecha de Inicio del carné; formato DD-MM-AAAA.", "1" },
                                       {"Fecha Final", "Fecha de caducidad del carné; formato DD-MM-AAAA.", "1" },
                                       {"Nro. Licencia", "Máximo 20 caracteres.", "1" },
                                       {"Fecha Nacimiento", "Formato DD-MM-AAAA.", "0" },
                                       {"Nro. Padron", "Nro. padrón según empresa de transporte; máximo de 5 caracteres.", "0" },
                                       {"Nro. Placa", "Máximo 25 caracteres.", "0" },
                                       {"Nombre Propietario", "Máximo 200 caracteres.", "0" },
                                       {"Telefóno", "Máximo 15 caracteres.", "0" },
                                       {"Clase Licencia", "Según pestaña Clase Licencia; indicar la descripción.", "0" },
                                       {"Categoria Licencia", "Según pestaña Categoria Licencia; indicar la descripción.", "0" },
                                       {"Tipo Servicio", "Según pestaña Tipo Servicio; indicar la descripción.", "0" },
                                       {"Dirección", "Máximo 500 caracteres.", "0" },
                                       {"Grupo Sanguíneo", "Según pestaña Grupo Sanguíneo; indicar la descripción.", "0" },
                                       {"Donación de Organo", "Indicar: 'SI' o 'NO'", "0" },
                                       {"Restricciones", "Máximo 500 caracteres.", "0" },
                                       {"Fecha Inscripción", "Formato DD-MM-AAAA.", "0" },
                                       {"Fecha Certificado", "Formato DD-MM-AAAA.", "0" },
                                       {"Fecha Inicio Curso", "Formato DD-MM-AAAA.", "0" },
                                       {"Fecha Final Curso", "Formato DD-MM-AAAA.", "0" }
                                    };

                ICell Celda;

                ISheet Hoja = hssfworkbook.CreateSheet("Plantilla");
                
                //-|> CABECERA DE DOCUMENTO
                IFont FuenteEtiqueta = Excel.Fuente_Iworkbook(hssfworkbook, "Arial", FontBoldWeight.Bold, IndexedColors.Black.Index, 8);
                ICellStyle CssCeldaEtiqueta = Excel.CssCelda_Iworkbook(hssfworkbook, FuenteEtiqueta, HorizontalAlignment.Left, VerticalAlignment.Center, IndexedColors.White.Index);

                IFont FuenteValor = Excel.Fuente_Iworkbook(hssfworkbook, "Arial", FontBoldWeight.Normal, IndexedColors.Black.Index, 8);
                ICellStyle CssCeldaValor = Excel.CssCelda_Iworkbook(hssfworkbook, FuenteValor, HorizontalAlignment.Left, VerticalAlignment.Center, IndexedColors.White.Index);

                ICellStyle CssCeldaObligatorio = Excel.CssCelda_Iworkbook(hssfworkbook, FuenteEtiqueta, HorizontalAlignment.Left, VerticalAlignment.Center, IndexedColors.Aqua.Index);

                IRow FilaEncabezado = Hoja.CreateRow(0);
                FilaEncabezado.HeightInPoints = 20;

                for (int c = 0; c < Cabecera.GetLength(0); c++)
                {
                    if (Cabecera[c, 2] == "1")
                        Celda = Excel.CeldaText(FilaEncabezado, c, CssCeldaObligatorio, Cabecera[c, 0]);
                    else
                        Celda = Excel.CeldaText(FilaEncabezado, c, CssCeldaEtiqueta, Cabecera[c, 0]);
                    Hoja.AutoSizeColumn(c);
                }




                Hoja = hssfworkbook.CreateSheet("Leyenda");

                int int_fila = 0;
                IRow Fila = Hoja.CreateRow(int_fila);
                Celda = Excel.CeldaText(Fila, 0, CssCeldaEtiqueta, "Campo");
                Celda = Excel.CeldaText(Fila, 1, CssCeldaEtiqueta, "Información");
                Celda = Excel.CeldaText(Fila, 3, CssCeldaObligatorio, "Los campos pintados de este color son obligatorios.");

                int_fila++;
                for (int c = 0; c < Cabecera.GetLength(0); c++)
                {
                    Fila = Hoja.CreateRow(int_fila);
                    if (Cabecera[c, 2] == "1")
                        Celda = Excel.CeldaText(Fila, 0, CssCeldaObligatorio, Cabecera[c, 0]);
                    else
                        Celda = Excel.CeldaText(Fila, 0, CssCeldaValor, Cabecera[c, 0]);
                    Celda = Excel.CeldaText(Fila, 1, CssCeldaValor, Cabecera[c, 1]);
                    
                    int_fila++;
                }
                Hoja.AutoSizeColumn(0);
                Hoja.AutoSizeColumn(1);




                Hoja = hssfworkbook.CreateSheet("TDI");
                int_fila = 0;
                Fila = Hoja.CreateRow(int_fila);
                Celda = Excel.CeldaText(Fila, 0, CssCeldaEtiqueta, "Código");
                Celda = Excel.CeldaText(Fila, 1, CssCeldaEtiqueta, "Descripción");

                if (M.ls_mme_tipo_doc_identidad.Count > 0)
                {
                    for(int i = 0; i < M.ls_mme_tipo_doc_identidad.Count; i++)
                    {
                        int_fila++;
                        Fila = Hoja.CreateRow(int_fila);
                        var item = M.ls_mme_tipo_doc_identidad[i];
                        Celda = Excel.CeldaText(Fila, 0, CssCeldaValor, item.me_tipo_doc_identidad.e_tipo_doc_identidad.vc_cod_tipo_doc_identidad);
                        Celda = Excel.CeldaText(Fila, 1, CssCeldaValor, item.me_tipo_doc_identidad.e_tipo_doc_identidad.vc_desc_tipo_doc_identidad);
                    }
                }
                Hoja.AutoSizeColumn(0);
                Hoja.AutoSizeColumn(1);



                Hoja = hssfworkbook.CreateSheet("Empresas de Transporte");
                int_fila = 0;
                Fila = Hoja.CreateRow(int_fila);
                Celda = Excel.CeldaText(Fila, 0, CssCeldaEtiqueta, "Código");
                Celda = Excel.CeldaText(Fila, 1, CssCeldaEtiqueta, "Descripción");

                if (M.ls_mme_empresa_trans.Count > 0)
                {
                    for (int i = 0; i < M.ls_mme_empresa_trans.Count; i++)
                    {
                        int_fila++;
                        Fila = Hoja.CreateRow(int_fila);
                        var item = M.ls_mme_empresa_trans[i];
                        Celda = Excel.CeldaText(Fila, 0, CssCeldaValor, item.me_empresa_trans.e_empresa_trans.vc_cod_empresa_trans);
                        Celda = Excel.CeldaText(Fila, 1, CssCeldaValor, item.me_empresa_trans.e_empresa_trans.vc_desc_empresa_trans);
                    }
                }
                Hoja.AutoSizeColumn(0);
                Hoja.AutoSizeColumn(1);





                Hoja = hssfworkbook.CreateSheet("Clase Licencia");
                int_fila = 0;
                Fila = Hoja.CreateRow(int_fila);
                Celda = Excel.CeldaText(Fila, 0, CssCeldaEtiqueta, "Código");
                Celda = Excel.CeldaText(Fila, 1, CssCeldaEtiqueta, "Descripción");

                if (M.ls_mme_clase_licencia.Count > 0)
                {
                    for (int i = 0; i < M.ls_mme_clase_licencia.Count; i++)
                    {
                        int_fila++;
                        Fila = Hoja.CreateRow(int_fila);
                        var item = M.ls_mme_clase_licencia[i];
                        Celda = Excel.CeldaText(Fila, 0, CssCeldaValor, item.me_clase_licencia.e_clase_licencia.vc_cod_clase_licencia);
                        Celda = Excel.CeldaText(Fila, 1, CssCeldaValor, item.me_clase_licencia.e_clase_licencia.vc_desc_clase_licencia);
                    }
                }
                Hoja.AutoSizeColumn(0);
                Hoja.AutoSizeColumn(1);




                Hoja = hssfworkbook.CreateSheet("Categoria Licencia");
                int_fila = 0;
                Fila = Hoja.CreateRow(int_fila);
                Celda = Excel.CeldaText(Fila, 0, CssCeldaEtiqueta, "Código");
                Celda = Excel.CeldaText(Fila, 1, CssCeldaEtiqueta, "Descripción");

                if (M.ls_mme_categoria_licencia.Count > 0)
                {
                    for (int i = 0; i < M.ls_mme_categoria_licencia.Count; i++)
                    {
                        int_fila++;
                        Fila = Hoja.CreateRow(int_fila);
                        var item = M.ls_mme_categoria_licencia[i];
                        Celda = Excel.CeldaText(Fila, 0, CssCeldaValor, item.me_categoria_licencia.e_categoria_licencia.vc_cod_categoria_licencia);
                        Celda = Excel.CeldaText(Fila, 1, CssCeldaValor, item.me_categoria_licencia.e_categoria_licencia.vc_desc_categoria_licencia);
                    }
                }
                Hoja.AutoSizeColumn(0);
                Hoja.AutoSizeColumn(1);




                Hoja = hssfworkbook.CreateSheet("Tipo Servicio");
                int_fila = 0;
                Fila = Hoja.CreateRow(int_fila);
                Celda = Excel.CeldaText(Fila, 0, CssCeldaEtiqueta, "Código");
                Celda = Excel.CeldaText(Fila, 1, CssCeldaEtiqueta, "Descripción");

                if (M.ls_mme_tipo_servicio.Count > 0)
                {
                    for (int i = 0; i < M.ls_mme_tipo_servicio.Count; i++)
                    {
                        int_fila++;
                        Fila = Hoja.CreateRow(int_fila);
                        var item = M.ls_mme_tipo_servicio[i];
                        Celda = Excel.CeldaText(Fila, 0, CssCeldaValor, item.me_tipo_servicio.e_tipo_servicio.vc_cod_tipo_servicio);
                        Celda = Excel.CeldaText(Fila, 1, CssCeldaValor, item.me_tipo_servicio.e_tipo_servicio.vc_desc_tipo_servicio);
                    }
                }
                Hoja.AutoSizeColumn(0);
                Hoja.AutoSizeColumn(1);





                Hoja = hssfworkbook.CreateSheet("Grupo Sanguíneo");
                int_fila = 0;
                Fila = Hoja.CreateRow(int_fila);
                Celda = Excel.CeldaText(Fila, 0, CssCeldaEtiqueta, "Código");
                Celda = Excel.CeldaText(Fila, 1, CssCeldaEtiqueta, "Descripción");

                if (M.ls_mme_grupo_sanguineo.Count > 0)
                {
                    for (int i = 0; i < M.ls_mme_grupo_sanguineo.Count; i++)
                    {
                        int_fila++;
                        Fila = Hoja.CreateRow(int_fila);
                        var item = M.ls_mme_grupo_sanguineo[i];
                        Celda = Excel.CeldaText(Fila, 0, CssCeldaValor, item.me_grupo_sanguineo.e_grupo_sanguineo.vc_cod_grupo_sanguineo);
                        Celda = Excel.CeldaText(Fila, 1, CssCeldaValor, item.me_grupo_sanguineo.e_grupo_sanguineo.vc_desc_grupo_sanguineo);
                    }
                }
                Hoja.AutoSizeColumn(0);
                Hoja.AutoSizeColumn(1);

                hssfworkbook.Write(output);
                writer.Flush();
                MemoryStream file = new MemoryStream();
                hssfworkbook.Write(file);
                return File(file.ToArray(), "application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Plantilla_Importar_Conductor.xlsx");
            }
            catch (Exception e)
            {
                Ssn.vc_master = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista = e.Message;

                return Redirect("/ErrorInterno");
            }
        }

        public ActionResult AC_Leer_Excel_Importar_Conductores()
        {
            Conductor_ImportarModel M = new Conductor_ImportarModel();

            try
            {
                foreach (string file in Request.Files)
                {
                    HttpPostedFileBase hpf = Request.Files[file] as HttpPostedFileBase;
                    if (hpf.ContentLength == 0)
                        continue;

                    using (var package = new ExcelPackage(hpf.InputStream))
                    {
                        ExcelWorksheet hoja = package.Workbook.Worksheets[1];

                        bool con_Error; bool vacio = false;
                        string accion;
                        string observacion;
                        DateTime fecha;

                        M.mme_conductor.e_tran.nu_cant_error = 0;
                        M.mme_conductor.e_tran.nu_cant_procesados = 0;
                        for (int fila = 2; hoja.Cells[fila, 1] != null; fila++)
                        {
                            var conductor = new ME_Conductor();
                            conductor.nu_nro_fila_excel = fila;

                            //1   Tipo de Importación
                            if (hoja.Cells[fila, 1].Value == null)
                            {
                                if (fila == 2) vacio = true;
                                break;
                            }
                            con_Error = false;
                            accion = hoja.Cells[fila, 1].Value.ToString();
                            conductor.ch_accion = accion;
                            observacion = "Errores: ";

                            //2   Código
                            if (accion == "A")
                            {
                                if (hoja.Cells[fila, 2].Value != null)
                                    conductor.e_conductor.vc_cod_conductor = hoja.Cells[fila, 2].Value.ToString();
                                else
                                {
                                    con_Error = true;
                                    observacion += " Si la acción es actualizar debe ingresar el código del conductor.";
                                }
                            }
                            //3   Apellido Paterno
                            if (hoja.Cells[fila, 3].Value != null)
                                conductor.e_conductor.vc_apellido_paterno = hoja.Cells[fila, 3].Value.ToString();
                            else
                            { con_Error = true; observacion += " Debe ingresar el apellido paterno."; }
                            //4   Apellido Materno
                            if (hoja.Cells[fila, 4].Value != null)
                                conductor.e_conductor.vc_apellido_materno = hoja.Cells[fila, 4].Value.ToString();
                            else
                            { con_Error = true; observacion += " Debe ingresar el apellido materno."; }
                            //5   Nombres
                            if (hoja.Cells[fila, 5].Value != null)
                                conductor.e_conductor.vc_nombres = hoja.Cells[fila, 5].Value.ToString();
                            else
                            { con_Error = true; observacion += " Debe ingresar el nombre del conductor."; }
                            //6   Tipo Doc. Identidad
                            if (hoja.Cells[fila, 6].Value != null)
                                conductor.e_tipo_doc_identidad.vc_desc_tipo_doc_identidad = hoja.Cells[fila, 6].Value.ToString();
                            else
                            { con_Error = true; observacion += " Debe ingresar el tipo de documento de identidad."; }
                            //7   Nro.Doc.Identidad
                            if (hoja.Cells[fila, 7].Value != null)
                                conductor.e_conductor.vc_nro_doc_identidad = hoja.Cells[fila, 7].Value.ToString();
                            else
                            { con_Error = true; observacion += " Debe ingresar el número de documento de identidad."; }
                            //8   Empresa de Transporte
                            if (hoja.Cells[fila, 8].Value != null)
                                conductor.e_empresa_trans.vc_desc_empresa_trans = hoja.Cells[fila, 8].Value.ToString();
                            else
                            { con_Error = true; observacion += " Debe ingresar la empresa de transporte."; }
                            //9   Fecha Inicio
                            if (hoja.Cells[fila, 9].Value != null)
                                if (DateTime.TryParse(hoja.Cells[fila, 9].Value.ToString(), out fecha) == true)
                                    conductor.e_conductor.dt_fec_inicio = Convert.ToDateTime(fecha);
                                else
                                { con_Error = true; observacion += " La fecha de inicio tiene formato incorrecto."; }
                            else
                            { con_Error = true; observacion += " Debe ingresar la fecha de inicio."; }
                            //10   Fecha Final
                            if (hoja.Cells[fila, 10].Value != null)
                                if (DateTime.TryParse(hoja.Cells[fila, 10].Value.ToString(), out fecha) == true)
                                    conductor.e_conductor.dt_fec_final = Convert.ToDateTime(fecha);
                                else
                                { con_Error = true; observacion += " La fecha final tiene formato incorrecto."; }
                            else
                            { con_Error = true; observacion += " Debe ingresar la fecha final."; }
                            //11  Nro.Licencia
                            if (hoja.Cells[fila, 11].Value != null)
                                conductor.e_conductor.vc_nro_licencia = hoja.Cells[fila, 11].Value.ToString();
                            else
                            { con_Error = true; observacion += " Debe ingresar el número de licencia."; }
                            //12  Fecha Nacimiento
                            if (hoja.Cells[fila, 12].Value != null)
                                if (DateTime.TryParse(hoja.Cells[fila, 12].Value.ToString(), out fecha) == true)
                                    conductor.e_conductor.dt_fec_nacimiento = Convert.ToDateTime(fecha);
                                else
                                { con_Error = true; observacion += " La fecha de nacimiento tiene formato incorrecto."; }
                            //13  Nro.Padron
                            if (hoja.Cells[fila, 13].Value != null)
                                conductor.e_conductor.vc_nro_padron = hoja.Cells[fila, 13].Value.ToString();
                            //14  Nro.Placa
                            if (hoja.Cells[fila, 14].Value != null)
                                conductor.e_conductor.vc_nro_placa = hoja.Cells[fila, 14].Value.ToString();
                            //15  Nombre Propietario
                            if (hoja.Cells[fila, 15].Value != null)
                                conductor.e_conductor.vc_nombre_propietario = hoja.Cells[fila, 15].Value.ToString();
                            //16  Telefóno
                            if (hoja.Cells[fila, 16].Value != null)
                                conductor.e_conductor.vc_nro_telefono = hoja.Cells[fila, 16].Value.ToString();
                            //17  Clase Licencia
                            if (hoja.Cells[fila, 17].Value != null)
                                conductor.e_clase_licencia.vc_desc_clase_licencia = hoja.Cells[fila, 17].Value.ToString();
                            //18  Categoria Licencia
                            if (hoja.Cells[fila, 18].Value != null)
                                conductor.e_categoria_licencia.vc_desc_categoria_licencia = hoja.Cells[fila, 18].Value.ToString();
                            //19  Tipo Servicio
                            if (hoja.Cells[fila, 19].Value != null)
                                conductor.e_tipo_servicio.vc_desc_tipo_servicio = hoja.Cells[fila, 19].Value.ToString();
                            //20  Dirección
                            if (hoja.Cells[fila, 20].Value != null)
                                conductor.e_conductor.vc_direccion = hoja.Cells[fila, 20].Value.ToString();
                            //21  Grupo Sanguíneo
                            if (hoja.Cells[fila, 21].Value != null)
                                conductor.e_grupo_sanguineo.vc_desc_grupo_sanguineo = hoja.Cells[fila, 21].Value.ToString();
                            //22  Donación de Organo
                            if (hoja.Cells[fila, 22].Value != null)
                                conductor.e_conductor.ch_donacion_organo = hoja.Cells[fila, 22].Value.ToString();
                            //23  Restricciones
                            if (hoja.Cells[fila, 23].Value != null)
                                conductor.e_conductor.vc_restricciones = hoja.Cells[fila, 23].Value.ToString();
                            //24  Fecha Inscripción
                            if (hoja.Cells[fila, 24].Value != null)
                                if (DateTime.TryParse(hoja.Cells[fila, 24].Value.ToString(), out fecha) == true)
                                    conductor.e_conductor.dt_fec_inscripcion = Convert.ToDateTime(fecha);
                                else
                                { con_Error = true; observacion += " La fecha de inscripción tiene formato incorrecto."; }
                            //25  Fecha Certificado
                            if (hoja.Cells[fila, 25].Value != null)
                                if (DateTime.TryParse(hoja.Cells[fila, 25].Value.ToString(), out fecha) == true)
                                    conductor.e_conductor.dt_fec_certificado = Convert.ToDateTime(fecha);
                                else
                                { con_Error = true; observacion += " La fecha de certificado tiene formato incorrecto."; }
                            //26  Fecha Inicio Curso
                            if (hoja.Cells[fila, 26].Value != null)
                                if (DateTime.TryParse(hoja.Cells[fila, 26].Value.ToString(), out fecha) == true)
                                    conductor.e_conductor.dt_fec_inicio_curso = Convert.ToDateTime(fecha);
                                else
                                { con_Error = true; observacion += " La fecha de inicio de curso tiene formato incorrecto."; }
                            //27  Fecha Final Curso
                            if (hoja.Cells[fila, 27].Value != null)
                                if (DateTime.TryParse(hoja.Cells[fila, 27].Value.ToString(), out fecha) == true)
                                    conductor.e_conductor.dt_fec_final_curso = Convert.ToDateTime(fecha);
                                else
                                { con_Error = true; observacion += " La fecha de final de curso tiene formato incorrecto."; }
                            M.mme_conductor.e_tran.nu_cant_procesados++;

                            if (con_Error)
                            {
                                M.mme_conductor.e_tran.nu_cant_error++;
                                conductor.nu_tran_stdo = 0;
                                conductor.tx_tran_mnsg = observacion;
                                M.mme_conductor.ls_me_errores.Add(conductor);
                            }
                            else
                                M.mme_conductor.ls_me_conductor.Add(conductor);
                        }

                        if (vacio)
                            return Json(App.Error("No se puede cargar archivo vacío.", null));

                        if (M.mme_conductor.ls_me_conductor.Count > 0)
                        {
                            M.mme_conductor.e_tran.vc_conexion_origen   = "SQL";
                            M.mme_conductor.e_tran.vc_tran_usua_regi    = Ssn.vc_usuario;
                            M.mme_conductor.e_tran.ch_tran_stdo_regi    = "A";
                            M.mme_conductor.me_conductor.e_proyecto.nu_id_proyecto = Ssn.nu_id_proyecto;
                            M.mme_conductor = P_Conductor.InsMasivo(M.mme_conductor);
                        }
                            
                    }
                }
            }
            catch (Exception e)
            {
                return Json(App.Error(e.Message, null));
            }
            return PartialView("VP_Resultados", M);
        }

        public ActionResult V_Imp_Conductor_Imagen()
        {
            try
            {

                return View("V_Imp_Conductor_Imagen");
            }
            catch (Exception e)
            {
                Ssn.vc_master = "~/Areas/Sistema/Views/MP_Vista.cshtml";
                Ssn.vc_error_vista = e.Message;
                return Redirect("/ErrorInterno");
            }
        }

        public ActionResult AC_Imp_Conductor_Imagen()
        {
            Conductor_ImportarModel M = new Conductor_ImportarModel();
            MME_Conductor multi = null;
            ME_Conductor item = null;
            string[] array;
            string ruta;
                        
            try
            {
                foreach (string file in Request.Files)
                {
                    HttpPostedFileBase hpf = Request.Files[file] as HttpPostedFileBase;
                    if (hpf.ContentLength == 0)
                        continue;

                    ruta = Path.Combine(Server.MapPath("~/Recursos/Img/Transportista/Temp/"), hpf.FileName.ToString());
                    Archivos.EliminarArchivo(ruta);
                    hpf.SaveAs(ruta);

                    item = new ME_Conductor();
                    item.e_conductor.vc_ruta_foto = "/Recursos/Img/Transportista/Temp/" + hpf.FileName.ToString();
                    M.mme_conductor.e_tran.nu_cant_procesados++;

                    //VALIDAR QUE EL ARCHIVO TENGA EXTENSIÓN
                    if (hpf.FileName.ToString().IndexOf(".") == 0)
                    {
                        M.mme_conductor.e_tran.nu_cant_error++;
                        item.e_conductor.vc_nro_doc_identidad = hpf.FileName.ToString();
                        item.tx_tran_mnsg = "El archivo no tiene extensión.";
                        M.mme_conductor.ls_me_conductor.Add(item);
                        M.mme_conductor.ls_me_errores.Add(item);
                        continue;
                    }

                    //VALIDAR QUE EL ARCHIVO TENGA LA EXTENSIÓN CORRECTA
                    array = hpf.FileName.Split('.');
                    if (array[array.Length-1].ToUpper() != "JPG")
                    {
                        M.mme_conductor.e_tran.nu_cant_error++;
                        item.e_conductor.vc_nro_doc_identidad = hpf.FileName.ToString();
                        item.tx_tran_mnsg = "El archivo no tiene la extensión correcta.";
                        M.mme_conductor.ls_me_conductor.Add(item);
                        M.mme_conductor.ls_me_errores.Add(item);
                        continue;
                    }
                    
                    //VALIDAR QUE EL NRO DOC IDENTIDAD EXISTA
                    item.e_proyecto.nu_id_proyecto         = Ssn.nu_id_proyecto;
                    item.e_conductor.vc_nro_doc_identidad  = array[0];

                    multi = new MME_Conductor();
                    multi.e_tran.vc_conexion_origen = "SQL";
                    multi.e_tran.nu_tran_ruta = 3;
                    multi.me_conductor = item;
                    item = P_Conductor.Get(multi).me_conductor;
                    item.e_conductor.vc_ruta_foto = "/Recursos/Img/Transportista/Temp/" + hpf.FileName.ToString();

                    if (item.e_conductor.nu_id_conductor == null)
                    {
                        M.mme_conductor.e_tran.nu_cant_error++;
                        item.e_conductor.vc_nro_doc_identidad = hpf.FileName.ToString();
                        item.tx_tran_mnsg = "El número de documento de identidad no existe.";
                        M.mme_conductor.ls_me_conductor.Add(item);
                        M.mme_conductor.ls_me_errores.Add(item);
                        continue;
                    }


                    //GUARDAR EL ARCHIVO
                    ruta = System.Web.HttpContext.Current.Server.MapPath("~/Recursos/Img/Transportista/") + hpf.FileName.ToString();
                    Archivos.EliminarArchivo(ruta);
                    hpf.SaveAs(ruta);
                    
                    M.mme_conductor.ls_me_conductor.Add(item);
                    M.mme_conductor.ls_me_exito.Add(item);
                    M.mme_conductor.e_tran.nu_cant_exito++;

                }

                return PartialView("VP_Resultados_Imagenes", M);
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