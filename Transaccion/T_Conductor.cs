using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.Common;
using Conexiones.SQLServer;
using MacroEntidad;
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
                    db.AddInParameter(cmd, "@VC_NRO_DOC_IDENTIDAD", DbType.String, m.me_conductor.e_conductor.vc_nro_doc_identidad);
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

        public MME_Conductor Ins(MME_Conductor m)
        {
            DbCommand cmd = null;
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_INS_CONDUCTORES"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_PROYECTO", DbType.Decimal, m.me_conductor.e_proyecto.nu_id_proyecto);
                    db.AddInParameter(cmd, "@VC_APELLIDO_PATERNO", DbType.String, m.me_conductor.e_conductor.vc_apellido_paterno);
                    db.AddInParameter(cmd, "@VC_APELLIDO_MATERNO", DbType.String, m.me_conductor.e_conductor.vc_apellido_materno);
                    db.AddInParameter(cmd, "@VC_NOMBRES", DbType.String, m.me_conductor.e_conductor.vc_nombres);
                    db.AddInParameter(cmd, "@NU_ID_TIPO_DOC_IDENTIDAD", DbType.Decimal, m.me_conductor.e_tipo_doc_identidad.nu_id_tipo_doc_identidad);
                    db.AddInParameter(cmd, "@VC_NRO_DOC_IDENTIDAD", DbType.String, m.me_conductor.e_conductor.vc_nro_doc_identidad);
                    db.AddInParameter(cmd, "@NU_ID_EMPRESA_TRANS", DbType.Decimal, m.me_conductor.e_empresa_trans.nu_id_empresa_trans);
                    db.AddInParameter(cmd, "@DT_FEC_INICIO", DbType.Date, m.me_conductor.e_conductor.dt_fec_inicio);
                    db.AddInParameter(cmd, "@DT_FEC_FINAL", DbType.Date, m.me_conductor.e_conductor.dt_fec_final);
                    db.AddInParameter(cmd, "@VC_NRO_LICENCIA", DbType.String, m.me_conductor.e_conductor.vc_nro_licencia);
                    db.AddInParameter(cmd, "@VC_RUTA_FOTO", DbType.String, m.me_conductor.e_conductor.vc_ruta_foto);
                    db.AddInParameter(cmd, "@DT_FEC_NACIMIENTO", DbType.Date, m.me_conductor.e_conductor.dt_fec_nacimiento);
                    db.AddInParameter(cmd, "@VC_NRO_PADRON", DbType.String, m.me_conductor.e_conductor.vc_nro_padron);
                    db.AddInParameter(cmd, "@VC_NRO_PLACA", DbType.String, m.me_conductor.e_conductor.vc_nro_placa);
                    db.AddInParameter(cmd, "@VC_NOMBRE_PROPIETARIO", DbType.String, m.me_conductor.e_conductor.vc_nombre_propietario);
                    db.AddInParameter(cmd, "@VC_NRO_TELEFONO", DbType.String, m.me_conductor.e_conductor.vc_nro_telefono);
                    db.AddInParameter(cmd, "@NU_ID_CLASE_LICENCIA", DbType.Decimal, m.me_conductor.e_clase_licencia.nu_id_clase_licencia);
                    db.AddInParameter(cmd, "@NU_ID_CATEGORIA_LICENCIA", DbType.Decimal, m.me_conductor.e_categoria_licencia.nu_id_categoria_licencia);
                    db.AddInParameter(cmd, "@NU_ID_TIPO_SERVICIO", DbType.Decimal, m.me_conductor.e_tipo_servicio.nu_id_tipo_servicio);
                    db.AddInParameter(cmd, "@VC_DIRECCION", DbType.String, m.me_conductor.e_conductor.vc_direccion);
                    db.AddInParameter(cmd, "@NU_ID_GRUPO_SANGUINEO", DbType.Decimal, m.me_conductor.e_grupo_sanguineo.nu_id_grupo_sanguineo);
                    db.AddInParameter(cmd, "@CH_DONACION_ORGANO", DbType.String, m.me_conductor.e_conductor.ch_donacion_organo);
                    db.AddInParameter(cmd, "@VC_RESTRICCIONES", DbType.String, m.me_conductor.e_conductor.vc_restricciones);
                    db.AddInParameter(cmd, "@dt_fec_inscripcion", DbType.Date, m.me_conductor.e_conductor.dt_fec_inscripcion);
                    db.AddInParameter(cmd, "@dt_fec_certificado", DbType.Date, m.me_conductor.e_conductor.dt_fec_certificado);
                    db.AddInParameter(cmd, "@dt_fec_inicio_curso", DbType.Date, m.me_conductor.e_conductor.dt_fec_inicio_curso);
                    db.AddInParameter(cmd, "@dt_fec_final_curso", DbType.Date, m.me_conductor.e_conductor.dt_fec_final_curso);
                    db.AddInParameter(cmd, "@dt_fec_evaluacion_medica", DbType.Date, m.me_conductor.e_conductor.dt_fec_evaluacion_medica);
                    db.AddInParameter(cmd, "@nu_id_centro_medico", DbType.Decimal, m.me_conductor.e_centro_medico.nu_id_centro_medico);
                    P_Transaccion.iIns(db, cmd, m.e_tran);
                    db.ExecuteNonQuery(cmd);
                    P_Transaccion.sIns(db, cmd, m.e_tran);
                    return m;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally { cmd.Connection.Close(); }
        }

        public MME_Conductor Upd(MME_Conductor m)
        {
            DbCommand cmd = null;
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_UPD_CONDUCTORES"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_PROYECTO", DbType.Decimal, m.me_conductor.e_proyecto.nu_id_proyecto);
                    db.AddInParameter(cmd, "@NU_ID_CONDUCTOR", DbType.Decimal, m.me_conductor.e_conductor.nu_id_conductor);
                    db.AddInParameter(cmd, "@VC_COD_CONDUCTOR", DbType.String, m.me_conductor.e_conductor.vc_cod_conductor);
                    db.AddInParameter(cmd, "@VC_APELLIDO_PATERNO", DbType.String, m.me_conductor.e_conductor.vc_apellido_paterno);
                    db.AddInParameter(cmd, "@VC_APELLIDO_MATERNO", DbType.String, m.me_conductor.e_conductor.vc_apellido_materno);
                    db.AddInParameter(cmd, "@VC_NOMBRES", DbType.String, m.me_conductor.e_conductor.vc_nombres);
                    db.AddInParameter(cmd, "@NU_ID_TIPO_DOC_IDENTIDAD", DbType.Decimal, m.me_conductor.e_tipo_doc_identidad.nu_id_tipo_doc_identidad);
                    db.AddInParameter(cmd, "@VC_NRO_DOC_IDENTIDAD", DbType.String, m.me_conductor.e_conductor.vc_nro_doc_identidad);
                    db.AddInParameter(cmd, "@NU_ID_EMPRESA_TRANS", DbType.Decimal, m.me_conductor.e_empresa_trans.nu_id_empresa_trans);
                    db.AddInParameter(cmd, "@DT_FEC_INICIO", DbType.Date, m.me_conductor.e_conductor.dt_fec_inicio);
                    db.AddInParameter(cmd, "@DT_FEC_FINAL", DbType.Date, m.me_conductor.e_conductor.dt_fec_final);
                    db.AddInParameter(cmd, "@VC_NRO_LICENCIA", DbType.String, m.me_conductor.e_conductor.vc_nro_licencia);
                    db.AddInParameter(cmd, "@VC_RUTA_FOTO", DbType.String, m.me_conductor.e_conductor.vc_ruta_foto);
                    db.AddInParameter(cmd, "@DT_FEC_NACIMIENTO", DbType.Date, m.me_conductor.e_conductor.dt_fec_nacimiento);
                    db.AddInParameter(cmd, "@VC_NRO_PADRON", DbType.String, m.me_conductor.e_conductor.vc_nro_padron);
                    db.AddInParameter(cmd, "@VC_NRO_PLACA", DbType.String, m.me_conductor.e_conductor.vc_nro_placa);
                    db.AddInParameter(cmd, "@VC_NOMBRE_PROPIETARIO", DbType.String, m.me_conductor.e_conductor.vc_nombre_propietario);
                    db.AddInParameter(cmd, "@VC_NRO_TELEFONO", DbType.String, m.me_conductor.e_conductor.vc_nro_telefono);
                    db.AddInParameter(cmd, "@NU_ID_CLASE_LICENCIA", DbType.Decimal, m.me_conductor.e_clase_licencia.nu_id_clase_licencia);
                    db.AddInParameter(cmd, "@NU_ID_CATEGORIA_LICENCIA", DbType.Decimal, m.me_conductor.e_categoria_licencia.nu_id_categoria_licencia);
                    db.AddInParameter(cmd, "@NU_ID_TIPO_SERVICIO", DbType.Decimal, m.me_conductor.e_tipo_servicio.nu_id_tipo_servicio);
                    db.AddInParameter(cmd, "@VC_DIRECCION", DbType.String, m.me_conductor.e_conductor.vc_direccion);
                    db.AddInParameter(cmd, "@NU_ID_GRUPO_SANGUINEO", DbType.Decimal, m.me_conductor.e_grupo_sanguineo.nu_id_grupo_sanguineo);
                    db.AddInParameter(cmd, "@CH_DONACION_ORGANO", DbType.String, m.me_conductor.e_conductor.ch_donacion_organo);
                    db.AddInParameter(cmd, "@VC_RESTRICCIONES", DbType.String, m.me_conductor.e_conductor.vc_restricciones);
                    db.AddInParameter(cmd, "@dt_fec_inscripcion", DbType.Date, m.me_conductor.e_conductor.dt_fec_inscripcion);
                    db.AddInParameter(cmd, "@dt_fec_certificado", DbType.Date, m.me_conductor.e_conductor.dt_fec_certificado);
                    db.AddInParameter(cmd, "@dt_fec_inicio_curso", DbType.Date, m.me_conductor.e_conductor.dt_fec_inicio_curso);
                    db.AddInParameter(cmd, "@dt_fec_final_curso", DbType.Date, m.me_conductor.e_conductor.dt_fec_final_curso);
                    db.AddInParameter(cmd, "@dt_fec_evaluacion_medica", DbType.Date, m.me_conductor.e_conductor.dt_fec_evaluacion_medica);
                    db.AddInParameter(cmd, "@nu_id_centro_medico", DbType.Decimal, m.me_conductor.e_centro_medico.nu_id_centro_medico);
                    P_Transaccion.iUpd(db, cmd, m.e_tran);
                    db.ExecuteNonQuery(cmd);
                    P_Transaccion.sUpd(db, cmd, m.e_tran);
                    return m;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally { cmd.Connection.Close(); }
        }

        public MME_Conductor UpdEstado(MME_Conductor m)
        {
            DbCommand cmd = null;
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_UPD_CONDUCTOR_ESTADO"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_PROYECTO", DbType.Decimal, m.me_conductor.e_proyecto.nu_id_proyecto);
                    db.AddInParameter(cmd, "@NU_ID_CONDUCTOR", DbType.Decimal, m.me_conductor.e_conductor.nu_id_conductor);
                    P_Transaccion.iUpd(db, cmd, m.e_tran);
                    db.ExecuteNonQuery(cmd);
                    P_Transaccion.sUpd(db, cmd, m.e_tran);
                    return m;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally { cmd.Connection.Close(); }
        }

        public MME_Conductor InsMasivo(MME_Conductor m)
        {
            DbCommand cmd = null;
            
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_INS_CONDUCTORES_MASIVO"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_PROYECTO", DbType.Decimal, m.me_conductor.e_proyecto.nu_id_proyecto);
                    db.AddInParameter(cmd, "@TIPO_IMPORTACION", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_COD_CONDUCTOR", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_APELLIDO_PATERNO", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_APELLIDO_MATERNO", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_NOMBRES", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_DESC_TIPO_DOC_IDENTIDAD", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_NRO_DOC_IDENTIDAD", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_DESC_EMPRESA_TRANS", DbType.String, null);
                    db.AddInParameter(cmd, "@DT_FEC_INICIO", DbType.Date, null);
                    db.AddInParameter(cmd, "@DT_FEC_FINAL", DbType.Date, null);
                    db.AddInParameter(cmd, "@VC_NRO_LICENCIA", DbType.String, null);
                    db.AddInParameter(cmd, "@DT_FEC_NACIMIENTO", DbType.Date, null);
                    db.AddInParameter(cmd, "@VC_NRO_PADRON", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_NRO_PLACA", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_NOMBRE_PROPIETARIO", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_TELEFONO", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_DESC_CLASE_LICENCIA", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_DESC_CATEGORIA_LICENCIA", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_DESC_TIPO_SERVICIO", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_DIRECCION", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_DESC_GRUPO_SANGUINEO", DbType.String, null);
                    db.AddInParameter(cmd, "@CH_DONACION_ORGANO", DbType.String, null);
                    db.AddInParameter(cmd, "@VC_RESTRICCIONES", DbType.String, null);
                    db.AddInParameter(cmd, "@DT_FEC_INSCRIPCION", DbType.String, null);
                    db.AddInParameter(cmd, "@DT_FEC_CERTIFICADO", DbType.String, null);
                    db.AddInParameter(cmd, "@DT_FEC_INICIO_CURSO", DbType.String, null);
                    db.AddInParameter(cmd, "@DT_FEC_FINAL_CURSO", DbType.String, null);
                    db.AddInParameter(cmd, "@DT_FEC_EVALUACION_MEDICA", DbType.Date, null);
                    db.AddInParameter(cmd, "@VC_DESC_CENTRO_MEDICO", DbType.String, null);
                    P_Transaccion.iIns(db, cmd, m.e_tran);

                    foreach (var item in m.ls_me_conductor)
                    {
                        db.SetParameterValue(cmd, "@TIPO_IMPORTACION", item.ch_accion);
                        db.SetParameterValue(cmd, "@VC_COD_CONDUCTOR", item.e_conductor.vc_cod_conductor);
                        db.SetParameterValue(cmd, "@VC_APELLIDO_PATERNO", item.e_conductor.vc_apellido_paterno);
                        db.SetParameterValue(cmd, "@VC_APELLIDO_MATERNO", item.e_conductor.vc_apellido_materno);
                        db.SetParameterValue(cmd, "@VC_NOMBRES", item.e_conductor.vc_nombres);
                        db.SetParameterValue(cmd, "@VC_DESC_TIPO_DOC_IDENTIDAD", item.e_tipo_doc_identidad.vc_desc_tipo_doc_identidad);
                        db.SetParameterValue(cmd, "@VC_NRO_DOC_IDENTIDAD", item.e_conductor.vc_nro_doc_identidad);
                        db.SetParameterValue(cmd, "@VC_DESC_EMPRESA_TRANS", item.e_empresa_trans.vc_desc_empresa_trans);
                        db.SetParameterValue(cmd, "@DT_FEC_INICIO", item.e_conductor.dt_fec_inicio);
                        db.SetParameterValue(cmd, "@DT_FEC_FINAL", item.e_conductor.dt_fec_final);
                        db.SetParameterValue(cmd, "@VC_NRO_LICENCIA", item.e_conductor.vc_nro_licencia);
                        db.SetParameterValue(cmd, "@DT_FEC_NACIMIENTO", item.e_conductor.dt_fec_nacimiento);
                        db.SetParameterValue(cmd, "@VC_NRO_PADRON", item.e_conductor.vc_nro_padron);
                        db.SetParameterValue(cmd, "@VC_NRO_PLACA", item.e_conductor.vc_nro_placa);
                        db.SetParameterValue(cmd, "@VC_NOMBRE_PROPIETARIO", item.e_conductor.vc_nombre_propietario);
                        db.SetParameterValue(cmd, "@VC_TELEFONO", item.e_conductor.vc_nro_telefono);
                        db.SetParameterValue(cmd, "@VC_DESC_CLASE_LICENCIA", item.e_clase_licencia.vc_desc_clase_licencia);
                        db.SetParameterValue(cmd, "@VC_DESC_CATEGORIA_LICENCIA", item.e_categoria_licencia.vc_desc_categoria_licencia);
                        db.SetParameterValue(cmd, "@VC_DESC_TIPO_SERVICIO", item.e_tipo_servicio.vc_desc_tipo_servicio);
                        db.SetParameterValue(cmd, "@VC_DIRECCION", item.e_conductor.vc_direccion);
                        db.SetParameterValue(cmd, "@VC_DESC_GRUPO_SANGUINEO", item.e_grupo_sanguineo.vc_desc_grupo_sanguineo);
                        db.SetParameterValue(cmd, "@CH_DONACION_ORGANO", item.e_conductor.ch_donacion_organo);
                        db.SetParameterValue(cmd, "@VC_RESTRICCIONES", item.e_conductor.vc_restricciones);
                        db.SetParameterValue(cmd, "@DT_FEC_INSCRIPCION", item.e_conductor.dt_fec_inscripcion);
                        db.SetParameterValue(cmd, "@DT_FEC_CERTIFICADO", item.e_conductor.dt_fec_certificado);
                        db.SetParameterValue(cmd, "@DT_FEC_INICIO_CURSO", item.e_conductor.dt_fec_inicio_curso);
                        db.SetParameterValue(cmd, "@DT_FEC_FINAL_CURSO", item.e_conductor.dt_fec_final_curso);
                        db.SetParameterValue(cmd, "@DT_FEC_EVALUACION_MEDICA", item.e_conductor.dt_fec_evaluacion_medica);
                        db.SetParameterValue(cmd, "@VC_DESC_CENTRO_MEDICO", item.e_centro_medico.vc_desc_centro_medico);
                        db.ExecuteNonQuery(cmd);
                        P_Transaccion.sIns(db, cmd, m.e_tran);

                        if (m.e_tran.nu_tran_stdo == 0)
                        {
                            m.e_tran.nu_cant_error++;

                            ME_Conductor me = new ME_Conductor();
                            me.nu_tran_stdo = m.e_tran.nu_tran_stdo;
                            me.tx_tran_mnsg = m.e_tran.tx_tran_mnsg;
                            me.nu_nro_fila_excel = item.nu_nro_fila_excel;
                            m.ls_me_errores.Add(me);
                        }
                        else
                        {
                            m.e_tran.nu_cant_exito++;
                            ME_Conductor me = new ME_Conductor();
                            if (item.ch_accion == "C")
                            {
                                item.e_conductor.vc_nombre_completo = item.e_conductor.vc_apellido_paterno + " " + item.e_conductor.vc_apellido_materno + " " + item.e_conductor.vc_nombres;
                                item.e_conductor.vc_cod_conductor = m.e_tran.vc_tran_codi;
                            }
                            m.ls_me_exito.Add(item);
                        }
                    }
                    return m;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally { cmd.Connection.Close(); }
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
            if (Convertidor.Ec(or, "ch_status"))
                m.e_tran.ch_tran_stdo_regi                          = or["ch_status"].ToText();
            if (Convertidor.Ec(or, "vc_usr_reg"))
                m.e_tran.vc_tran_usua_regi                          = or["vc_usr_reg"].ToText();
            if (Convertidor.Ec(or, "dt_fec_reg"))
                m.e_tran.dt_tran_fech_regi                          = or["dt_fec_reg"].ToDateTime();
            if (Convertidor.Ec(or, "dt_fec_nacimiento"))
                m.me_conductor.e_conductor.dt_fec_nacimiento        = or["dt_fec_nacimiento"].ToDateTime();
            if (Convertidor.Ec(or, "dt_fec_inscripcion"))
                m.me_conductor.e_conductor.dt_fec_inscripcion       = or["dt_fec_inscripcion"].ToDateTime();
            if (Convertidor.Ec(or, "dt_fec_certificado"))
                m.me_conductor.e_conductor.dt_fec_certificado       = or["dt_fec_certificado"].ToDateTime();
            if (Convertidor.Ec(or, "dt_fec_inicio_curso"))
                m.me_conductor.e_conductor.dt_fec_inicio_curso      = or["dt_fec_inicio_curso"].ToDateTime();
            if (Convertidor.Ec(or, "dt_fec_final_curso"))
                m.me_conductor.e_conductor.dt_fec_final_curso       = or["dt_fec_final_curso"].ToDateTime();
            if (Convertidor.Ec(or, "dt_fec_evaluacion_medica"))
                m.me_conductor.e_conductor.dt_fec_evaluacion_medica = or["dt_fec_evaluacion_medica"].ToDateTime();

            //Tipo Documento de Identidad
            if (Convertidor.Ec(or, "nu_id_tipo_doc_identidad"))
                m.me_conductor.e_tipo_doc_identidad.nu_id_tipo_doc_identidad    = or["nu_id_tipo_doc_identidad"].ToInt();
            if (Convertidor.Ec(or, "vc_desc_tipo_doc_identidad"))
                m.me_conductor.e_tipo_doc_identidad.vc_desc_tipo_doc_identidad  = or["vc_desc_tipo_doc_identidad"].ToText();


            //Empresa de Transporte
            if (Convertidor.Ec(or, "nu_id_empresa_trans"))
                m.me_conductor.e_empresa_trans.nu_id_empresa_trans      = or["nu_id_empresa_trans"].ToInt();
            if (Convertidor.Ec(or, "vc_desc_empresa_trans"))
                m.me_conductor.e_empresa_trans.vc_desc_empresa_trans    = or["vc_desc_empresa_trans"].ToText();


            //Clase de licencia
            if (Convertidor.Ec(or, "nu_id_clase_licencia"))
                m.me_conductor.e_clase_licencia.nu_id_clase_licencia    = or["nu_id_clase_licencia"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_clase_licencia"))
                m.me_conductor.e_clase_licencia.vc_cod_clase_licencia   = or["vc_cod_clase_licencia"].ToText();
            if (Convertidor.Ec(or, "vc_desc_clase_licencia"))
                m.me_conductor.e_clase_licencia.vc_desc_clase_licencia  = or["vc_desc_clase_licencia"].ToText();


            //Categoria licencia
            if (Convertidor.Ec(or, "nu_id_categoria_licencia"))
                m.me_conductor.e_categoria_licencia.nu_id_categoria_licencia    = or["nu_id_categoria_licencia"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_categoria_licencia"))
                m.me_conductor.e_categoria_licencia.vc_cod_categoria_licencia   = or["vc_cod_categoria_licencia"].ToText();
            if (Convertidor.Ec(or, "vc_desc_categoria_licencia"))
                m.me_conductor.e_categoria_licencia.vc_desc_categoria_licencia  = or["vc_desc_categoria_licencia"].ToText();


            //Tipo Servicio
            if (Convertidor.Ec(or, "nu_id_tipo_servicio"))
                m.me_conductor.e_tipo_servicio.nu_id_tipo_servicio      = or["nu_id_tipo_servicio"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_tipo_servicio"))
                m.me_conductor.e_tipo_servicio.vc_cod_tipo_servicio     = or["vc_cod_tipo_servicio"].ToText();
            if (Convertidor.Ec(or, "vc_desc_tipo_servicio"))
                m.me_conductor.e_tipo_servicio.vc_desc_tipo_servicio    = or["vc_desc_tipo_servicio"].ToText();

            //Grupo Sanguineo
            if (Convertidor.Ec(or, "nu_id_grupo_sanguineo"))
                m.me_conductor.e_grupo_sanguineo.nu_id_grupo_sanguineo      = or["nu_id_grupo_sanguineo"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_grupo_sanguineo"))
                m.me_conductor.e_grupo_sanguineo.vc_cod_grupo_sanguineo     = or["vc_cod_grupo_sanguineo"].ToText();
            if (Convertidor.Ec(or, "vc_desc_grupo_sanguineo"))
                m.me_conductor.e_grupo_sanguineo.vc_desc_grupo_sanguineo    = or["vc_desc_grupo_sanguineo"].ToText();

            //Centro Médico
            if (Convertidor.Ec(or, "nu_id_centro_medico"))
                m.me_conductor.e_centro_medico.nu_id_centro_medico          = or["nu_id_centro_medico"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_centro_medico"))
                m.me_conductor.e_centro_medico.vc_cod_centro_medico         = or["vc_cod_centro_medico"].ToText();
            if (Convertidor.Ec(or, "vc_desc_centro_medico"))
                m.me_conductor.e_centro_medico.vc_desc_centro_medico        = or["vc_desc_centro_medico"].ToText();

            return m;
        }
    }
}
