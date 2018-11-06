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
    }
}