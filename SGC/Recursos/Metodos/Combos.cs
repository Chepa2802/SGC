using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MultiEntidad.Solucion;
using Procedimiento;
using System.Web.Mvc;

namespace SGC.Recursos.Metodos
{
    public class Combos
    {
        public static MME_Transaccion Tran()
        {
            MME_Transaccion tran            = new MME_Transaccion();
            tran.e_tran.ch_tran_stdo_regi   = "A";
            return tran;
        }

        public static List<SelectListItem> Proyecto(string cn, int? nu_tran_ruta, string vc_usuario)
        {
            MME_Proyecto mme = new MME_Proyecto();
            mme.e_tran                      = Tran().e_tran;
            mme.e_tran.vc_conexion_origen   = cn;
            mme.e_tran.vc_tran_usua_ptcn    = vc_usuario;
            mme.e_tran.nu_tran_ruta         = nu_tran_ruta;

            List<MME_Proyecto> ls_mme = P_Proyecto.SelUsuario(mme);
            var cb_proyecto = new List<SelectListItem>();

            cb_proyecto.Add(new SelectListItem()
            {
                Text = "-- SELECCIONE --",
                Value = null
            });

            foreach (var item in ls_mme)
            {
                cb_proyecto.Add(new SelectListItem()
                {
                    Text    = item.me_proyecto.e_proyecto.vc_desc_proyecto  ,
                    Value   = item.me_proyecto.e_proyecto.nu_id_proyecto.ToString()
                });
            }
            return cb_proyecto;
        }

        public static List<SelectListItem> Empresa_Transporte(string cn, int? nu_tran_ruta, string vc_usuario, int? nu_id_proyecto)
        {
            MME_Empresa_Trans mme = new MME_Empresa_Trans();
            mme.e_tran                      = Tran().e_tran;
            mme.e_tran.vc_conexion_origen   = cn;
            mme.e_tran.vc_tran_usua_ptcn    = vc_usuario;
            mme.e_tran.nu_tran_ruta         = nu_tran_ruta;
            mme.me_empresa_trans.e_proyecto.nu_id_proyecto = nu_id_proyecto;

            List<MME_Empresa_Trans> ls_mme = P_Empresa_Trans.Sel(mme);
            var cb_empresa_trans = new List<SelectListItem>();

            cb_empresa_trans.Add(new SelectListItem()
            {
                Text = "-- SELECCIONE --",
                Value = null
            });

            foreach (var item in ls_mme)
            {
                cb_empresa_trans.Add(new SelectListItem()
                {
                    Text = item.me_empresa_trans.e_empresa_trans.vc_desc_empresa_trans,
                    Value = item.me_empresa_trans.e_empresa_trans.nu_id_empresa_trans.ToString()
                });
            }
            return cb_empresa_trans;
        }

        public static List<SelectListItem> Tipo_Doc_Identidad(string cn, int? nu_tran_ruta, string vc_usuario)
        {
            MME_Tipo_Doc_Identidad mme = new MME_Tipo_Doc_Identidad();
            mme.e_tran                      = Tran().e_tran;
            mme.e_tran.vc_conexion_origen   = cn;
            mme.e_tran.vc_tran_usua_ptcn    = vc_usuario;
            mme.e_tran.nu_tran_ruta         = nu_tran_ruta;

            List<MME_Tipo_Doc_Identidad> ls_mme = P_Tipo_Doc_Identidad.Sel(mme);
            var cb_tipo_doc_identidad = new List<SelectListItem>();

            cb_tipo_doc_identidad.Add(new SelectListItem()
            {
                Text = "-- SELECCIONE --",
                Value = null
            });

            foreach (var item in ls_mme)
            {
                cb_tipo_doc_identidad.Add(new SelectListItem()
                {
                    Text = item.me_tipo_doc_identidad.e_tipo_doc_identidad.vc_desc_tipo_doc_identidad,
                    Value = item.me_tipo_doc_identidad.e_tipo_doc_identidad.nu_id_tipo_doc_identidad.ToString()
                });
            }
            return cb_tipo_doc_identidad;
        }

        public static List<SelectListItem> Grupo_Sanguineo(string cn, int? nu_tran_ruta, string vc_usuario)
        {
            MME_Grupo_Sanguineo mme = new MME_Grupo_Sanguineo();
            mme.e_tran                      = Tran().e_tran;
            mme.e_tran.vc_conexion_origen   = cn;
            mme.e_tran.vc_tran_usua_ptcn    = vc_usuario;
            mme.e_tran.nu_tran_ruta         = nu_tran_ruta;

            List<MME_Grupo_Sanguineo> ls_mme = P_Grupo_Sanguineo.Sel(mme);
            var cb_grupo_sanguineo = new List<SelectListItem>();

            cb_grupo_sanguineo.Add(new SelectListItem()
            {
                Text = "-- SELECCIONE --",
                Value = null
            });

            foreach (var item in ls_mme)
            {
                cb_grupo_sanguineo.Add(new SelectListItem()
                {
                    Text = item.me_grupo_sanguineo.e_grupo_sanguineo.vc_desc_grupo_sanguineo,
                    Value = item.me_grupo_sanguineo.e_grupo_sanguineo.nu_id_grupo_sanguineo.ToString()
                });
            }
            return cb_grupo_sanguineo;
        }

        public static List<SelectListItem> Clase_Licencia(string cn, int? nu_tran_ruta, string vc_usuario)
        {
            MME_Clase_Licencia mme = new MME_Clase_Licencia();
            mme.e_tran                      = Tran().e_tran;
            mme.e_tran.vc_conexion_origen   = cn;
            mme.e_tran.vc_tran_usua_ptcn    = vc_usuario;
            mme.e_tran.nu_tran_ruta         = nu_tran_ruta;

            List<MME_Clase_Licencia> ls_mme = P_Clase_Licencia.Sel(mme);
            var cb_clase_licencia = new List<SelectListItem>();

            cb_clase_licencia.Add(new SelectListItem()
            {
                Text = "-- SELECCIONE --",
                Value = null
            });

            foreach (var item in ls_mme)
            {
                cb_clase_licencia.Add(new SelectListItem()
                {
                    Text = item.me_clase_licencia.e_clase_licencia.vc_desc_clase_licencia,
                    Value = item.me_clase_licencia.e_clase_licencia.nu_id_clase_licencia.ToString()
                });
            }
            return cb_clase_licencia;
        }

        public static List<SelectListItem> Categoria_Licencia(string cn, int? nu_tran_ruta, string vc_usuario)
        {
            MME_Categoria_Licencia mme = new MME_Categoria_Licencia();
            mme.e_tran                      = Tran().e_tran;
            mme.e_tran.vc_conexion_origen   = cn;
            mme.e_tran.vc_tran_usua_ptcn    = vc_usuario;
            mme.e_tran.nu_tran_ruta         = nu_tran_ruta;

            List<MME_Categoria_Licencia> ls_mme = P_Categoria_Licencia.Sel(mme);
            var cb_categoria_licencia = new List<SelectListItem>();

            cb_categoria_licencia.Add(new SelectListItem()
            {
                Text = "-- SELECCIONE --",
                Value = null
            });

            foreach (var item in ls_mme)
            {
                cb_categoria_licencia.Add(new SelectListItem()
                {
                    Text = item.me_categoria_licencia.e_categoria_licencia.vc_desc_categoria_licencia,
                    Value = item.me_categoria_licencia.e_categoria_licencia.nu_id_categoria_licencia.ToString()
                });
            }
            return cb_categoria_licencia;
        }

        public static List<SelectListItem> Tipo_Servicio(string cn, int? nu_tran_ruta, string vc_usuario)
        {
            MME_Tipo_Servicio mme = new MME_Tipo_Servicio();
            mme.e_tran                      = Tran().e_tran;
            mme.e_tran.vc_conexion_origen   = cn;
            mme.e_tran.vc_tran_usua_ptcn    = vc_usuario;
            mme.e_tran.nu_tran_ruta         = nu_tran_ruta;

            List<MME_Tipo_Servicio> ls_mme = P_Tipo_Servicio.Sel(mme);
            var cb_tipo_servicio = new List<SelectListItem>();

            cb_tipo_servicio.Add(new SelectListItem()
            {
                Text = "-- SELECCIONE --",
                Value = null
            });

            foreach (var item in ls_mme)
            {
                cb_tipo_servicio.Add(new SelectListItem()
                {
                    Text = item.me_tipo_servicio.e_tipo_servicio.vc_desc_tipo_servicio,
                    Value = item.me_tipo_servicio.e_tipo_servicio.nu_id_tipo_servicio.ToString()
                });
            }
            return cb_tipo_servicio;
        }

        public static List<SelectListItem> Centro_Medico(string cn, int? nu_tran_ruta, string vc_usuario, int? nu_id_proyecto)
        {
            MME_Centro_Medico mme = new MME_Centro_Medico();
            mme.e_tran = Tran().e_tran;
            mme.e_tran.vc_conexion_origen = cn;
            mme.e_tran.vc_tran_usua_ptcn = vc_usuario;
            mme.e_tran.nu_tran_ruta = nu_tran_ruta;
            mme.me_centro_medico.e_proyecto.nu_id_proyecto = nu_id_proyecto;

            List<MME_Centro_Medico> ls_mme = P_Centro_Medico.Sel(mme);
            var combo = new List<SelectListItem>();

            combo.Add(new SelectListItem()
            {
                Text = "-- SELECCIONE --",
                Value = "null"
            });

            foreach (var item in ls_mme)
            {
                combo.Add(new SelectListItem()
                {
                    Text = item.me_centro_medico.e_centro_medico.vc_desc_centro_medico,
                    Value = item.me_centro_medico.e_centro_medico.nu_id_centro_medico.ToString()
                });
            }
            return combo;
        }
    }
}