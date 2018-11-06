using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.Common;
using Conexiones.SQLServer;
using MultiEntidad.Solucion;
using Transaccion.Recursos;
using System.Configuration;

namespace Transaccion
{
    public class T_Conductor : SqlCn
    {
        public T_Conductor(string Cn) : base(Cn) { }

        public List<MME_Conductor> Sel(ref DbCommand cmd, MME_Conductor m)
        {
            List<MME_Conductor> lm = new List<MME_Conductor>();
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_SEL_CONDUCTOR"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_PROYECTO", DbType.Decimal, m.me_conductor.e_proyecto.nu_id_proyecto);
                    db.AddInParameter(cmd, "@NU_ID_CONDUCTOR", DbType.Decimal, m.me_conductor.e_conductor.nu_id_conductor);
                    db.AddInParameter(cmd, "@NU_ID_EMPRESA_TRANS", DbType.Decimal, m.me_conductor.e_empresa_trans.nu_id_empresa_trans);
                    P_Transaccion.iGet(db, cmd, m.e_tran);
                    IDataReader or = db.ExecuteReader(cmd);
                    lm = LMme(or);
                    P_Transaccion.sGet(db, cmd, m.e_tran);
                    or.Close();
                    return lm;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public MME_Conductor Get(ref DbCommand cmd, MME_Conductor m)
        {
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_GET_CONDUCTORES"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_PROYECTO", DbType.Decimal, m.me_conductor.e_proyecto.nu_id_proyecto);
                    db.AddInParameter(cmd, "@NU_ID_CONDUCTOR", DbType.Decimal, m.me_conductor.e_conductor.nu_id_conductor);
                    P_Transaccion.iGet(db, cmd, m.e_tran);
                    IDataReader or = db.ExecuteReader(cmd);
                    if (or.Read())
                    {
                        m = Mme(or);
                    }
                    P_Transaccion.sGet(db, cmd, m.e_tran);
                    or.Close();
                    return m;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private List<MME_Conductor> LMme(IDataReader or)
        {
            var ls_mme = new List<MME_Conductor>();
            while (or.Read())
            {
                ls_mme.Add(Mme(or));
            }
            return ls_mme;
        }

        private MME_Conductor Mme(IDataReader or)
        {
            MME_Conductor m = new MME_Conductor();

            //Proyecto
            if (Convertidor.Ec(or, "nu_id_proyecto"))
                m.me_conductor.e_proyecto.nu_id_proyecto    = or["nu_id_proyecto"].ToInt();


            //Conductor
            if (Convertidor.Ec(or, "nu_id_conductor"))
                m.me_conductor.e_conductor.nu_id_conductor          = or["nu_id_conductor"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_conductor"))
                m.me_conductor.e_conductor.vc_cod_conductor         = or["vc_cod_conductor"].ToText();
            if (Convertidor.Ec(or, "vc_apellido_paterno"))
                m.me_conductor.e_conductor.vc_apellido_paterno      = or["vc_apellido_paterno"].ToText();
            if (Convertidor.Ec(or, "vc_apellido_materno"))
                m.me_conductor.e_conductor.vc_apellido_materno      = or["vc_apellido_materno"].ToText();
            if (Convertidor.Ec(or, "vc_nombres"))
                m.me_conductor.e_conductor.vc_nombres               = or["vc_nombres"].ToText();
            if (Convertidor.Ec(or, "vc_nombre_completo"))
                m.me_conductor.e_conductor.vc_nombre_completo       = or["vc_nombre_completo"].ToText();
            if (Convertidor.Ec(or, "vc_nro_doc_identidad"))
                m.me_conductor.e_conductor.vc_nro_doc_identidad     = or["vc_nro_doc_identidad"].ToText();
            if (Convertidor.Ec(or, "dt_fec_inicio"))
                m.me_conductor.e_conductor.dt_fec_inicio            = or["dt_fec_inicio"].ToDateTime();
            if (Convertidor.Ec(or, "dt_fec_final"))
                m.me_conductor.e_conductor.dt_fec_final             = or["dt_fec_final"].ToDateTime();
            if (Convertidor.Ec(or, "vc_nro_licencia"))
                m.me_conductor.e_conductor.vc_nro_licencia          = or["vc_nro_licencia"].ToText();
            if (Convertidor.Ec(or, "vc_ruta_foto"))
                m.me_conductor.e_conductor.vc_ruta_foto             = or["vc_ruta_foto"].ToText();
            if (Convertidor.Ec(or, "vc_nro_padron"))
                m.me_conductor.e_conductor.vc_nro_padron            = or["vc_nro_padron"].ToText();
            if (Convertidor.Ec(or, "vc_nro_placa"))
                m.me_conductor.e_conductor.vc_nro_placa             = or["vc_nro_placa"].ToText();
            if (Convertidor.Ec(or, "vc_nombre_propietario"))
                m.me_conductor.e_conductor.vc_nombre_propietario    = or["vc_nombre_propietario"].ToText();
            if (Convertidor.Ec(or, "vc_nro_telefono"))
                m.me_conductor.e_conductor.vc_nro_telefono          = or["vc_nro_telefono"].ToText();
            if (Convertidor.Ec(or, "vc_direccion"))
                m.me_conductor.e_conductor.vc_direccion             = or["vc_direccion"].ToText();
            if (Convertidor.Ec(or, "ch_donacion_organo"))
                m.me_conductor.e_conductor.ch_donacion_organo       = or["ch_donacion_organo"].ToText();
            if (Convertidor.Ec(or, "vc_restricciones"))
                m.me_conductor.e_conductor.vc_restricciones         = or["vc_restricciones"].ToText();


            //Tipo Documento de Identidad
            if (Convertidor.Ec(or, "nu_id_tipo_doc_identidad"))
                m.me_conductor.e_tipo_doc_identidad.nu_id_tipo_doc_identidad = or["nu_id_tipo_doc_identidad"].ToInt();
            if (Convertidor.Ec(or, "vc_desc_tipo_doc_identidad"))
                m.me_conductor.e_tipo_doc_identidad.vc_desc_tipo_doc_identidad = or["vc_desc_tipo_doc_identidad"].ToText();


            //Empresa de Transporte
            if (Convertidor.Ec(or, "nu_id_empresa_trans"))
                m.me_conductor.e_empresa_trans.nu_id_empresa_trans = or["nu_id_empresa_trans"].ToInt();
            if (Convertidor.Ec(or, "vc_desc_empresa_trans"))
                m.me_conductor.e_empresa_trans.vc_desc_empresa_trans = or["vc_desc_empresa_trans"].ToText();


            //Clase de licencia
            if (Convertidor.Ec(or, "nu_id_clase_licencia"))
                m.me_conductor.e_clase_licencia.nu_id_clase_licencia = or["nu_id_clase_licencia"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_clase_licencia"))
                m.me_conductor.e_clase_licencia.vc_cod_clase_licencia = or["vc_cod_clase_licencia"].ToText();


            //Categoria licencia
            if (Convertidor.Ec(or, "nu_id_categoria_licencia"))
                m.me_conductor.e_categoria_licencia.nu_id_categoria_licencia = or["nu_id_categoria_licencia"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_categoria_licencia"))
                m.me_conductor.e_categoria_licencia.vc_cod_categoria_licencia = or["vc_cod_categoria_licencia"].ToText();


            //Tipo Servicio
            if (Convertidor.Ec(or, "nu_id_tipo_servicio"))
                m.me_conductor.e_tipo_servicio.nu_id_tipo_servicio = or["nu_id_tipo_servicio"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_tipo_servicio"))
                m.me_conductor.e_tipo_servicio.vc_cod_tipo_servicio = or["vc_cod_tipo_servicio"].ToText();

            return m;
        }
    }
}
