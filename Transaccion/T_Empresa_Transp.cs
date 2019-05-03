using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.Common;
using Conexiones.SQLServer;
using MultiEntidad.Solucion;
using Transaccion.Recursos;
using System.Configuration;

namespace Transaccion
{
    public class T_Empresa_Transp: SqlCn
    {
        public T_Empresa_Transp(string Cn) : base(Cn) { }

        public List<MME_Empresa_Trans> Sel(ref DbCommand cmd, MME_Empresa_Trans m)
        {
            List<MME_Empresa_Trans> lm = new List<MME_Empresa_Trans>();
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_SEL_EMPRESA_TRANS"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_PROYECTO", DbType.Int16, m.me_empresa_trans.e_proyecto.nu_id_proyecto);
                    db.AddInParameter(cmd, "@NU_ID_EMPRESA_TRANS", DbType.String, m.me_empresa_trans.e_empresa_trans.nu_id_empresa_trans);
                    db.AddInParameter(cmd, "@CH_STATUS", DbType.String, m.e_tran.ch_tran_stdo_regi);
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

        public MME_Empresa_Trans Get(MME_Empresa_Trans m)
        {
            DbCommand cmd = null;
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_SEL_EMPRESA_TRANS"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_PROYECTO", DbType.Int16, m.me_empresa_trans.e_proyecto.nu_id_proyecto);
                    db.AddInParameter(cmd, "@NU_ID_EMPRESA_TRANS", DbType.String, m.me_empresa_trans.e_empresa_trans.nu_id_empresa_trans);
                    db.AddInParameter(cmd, "@CH_STATUS", DbType.String, m.e_tran.ch_tran_stdo_regi);
                    P_Transaccion.iGet(db, cmd, m.e_tran);
                    IDataReader or = db.ExecuteReader(cmd);
                    if (or.Read())
                    {
                        m = Mme(or);
                    }
                    or.Close();
                    return m;
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public MME_Empresa_Trans Ins(MME_Empresa_Trans m)
        {
            DbCommand cmd = null;
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_INS_EMPRESA_TRANS"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_PROYECTO", DbType.Int16, m.me_empresa_trans.e_proyecto.nu_id_proyecto);
                    db.AddInParameter(cmd, "@VC_COD_EMPRESA_TRANS", DbType.String, m.me_empresa_trans.e_empresa_trans.vc_cod_empresa_trans);
                    db.AddInParameter(cmd, "@VC_DESC_EMPRESA_TRANS", DbType.String, m.me_empresa_trans.e_empresa_trans.vc_desc_empresa_trans);
                    db.AddInParameter(cmd, "@VC_RUC", DbType.String, m.me_empresa_trans.e_empresa_trans.vc_ruc);
                    db.AddInParameter(cmd, "@VC_DIRECCION", DbType.String, m.me_empresa_trans.e_empresa_trans.vc_direccion);
                    db.AddInParameter(cmd, "@VC_RESOLUCION", DbType.String, m.me_empresa_trans.e_empresa_trans.vc_resolucion);
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

        public MME_Empresa_Trans Upd(MME_Empresa_Trans m)
        {
            DbCommand cmd = null;
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_UPD_EMPRESA_TRANS"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_PROYECTO", DbType.Int16, m.me_empresa_trans.e_proyecto.nu_id_proyecto);
                    db.AddInParameter(cmd, "@NU_ID_EMPRESA_TRANS", DbType.Int16, m.me_empresa_trans.e_empresa_trans.nu_id_empresa_trans);
                    db.AddInParameter(cmd, "@VC_COD_EMPRESA_TRANS", DbType.String, m.me_empresa_trans.e_empresa_trans.vc_cod_empresa_trans);
                    db.AddInParameter(cmd, "@VC_DESC_EMPRESA_TRANS", DbType.String, m.me_empresa_trans.e_empresa_trans.vc_desc_empresa_trans);
                    db.AddInParameter(cmd, "@VC_RUC", DbType.String, m.me_empresa_trans.e_empresa_trans.vc_ruc);
                    db.AddInParameter(cmd, "@VC_DIRECCION", DbType.String, m.me_empresa_trans.e_empresa_trans.vc_direccion);
                    db.AddInParameter(cmd, "@VC_RESOLUCION", DbType.String, m.me_empresa_trans.e_empresa_trans.vc_resolucion);
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

        public MME_Empresa_Trans Upd_Estado(MME_Empresa_Trans m)
        {
            DbCommand cmd = null;
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_UPD_EMPRESA_TRANS_ESTADO"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_PROYECTO", DbType.Int16, m.me_empresa_trans.e_proyecto.nu_id_proyecto);
                    db.AddInParameter(cmd, "@NU_ID_EMPRESA_TRANS", DbType.Int16, m.me_empresa_trans.e_empresa_trans.nu_id_empresa_trans);
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

        private List<MME_Empresa_Trans> LMme(IDataReader or)
        {
            var ls_mme = new List<MME_Empresa_Trans>();
            while (or.Read())
            {
                ls_mme.Add(Mme(or));
            }
            return ls_mme;
        }

        private MME_Empresa_Trans Mme(IDataReader or)
        {
            MME_Empresa_Trans m = new MME_Empresa_Trans();

            //Proyecto
            if (Convertidor.Ec(or, "nu_id_proyecto"))
                m.me_empresa_trans.e_proyecto.nu_id_proyecto        = or["nu_id_proyecto"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_proyecto"))
                m.me_empresa_trans.e_proyecto.vc_cod_proyecto       = or["vc_cod_proyecto"].ToText();
            if (Convertidor.Ec(or, "vc_desc_proyecto"))
                m.me_empresa_trans.e_proyecto.vc_desc_proyecto      = or["vc_desc_proyecto"].ToText();


            //Empresa de Transporte
            if (Convertidor.Ec(or, "nu_id_empresa_trans"))
                m.me_empresa_trans.e_empresa_trans.nu_id_empresa_trans      = or["nu_id_empresa_trans"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_empresa_trans"))
                m.me_empresa_trans.e_empresa_trans.vc_cod_empresa_trans     = or["vc_cod_empresa_trans"].ToText();
            if (Convertidor.Ec(or, "vc_desc_empresa_trans"))
                m.me_empresa_trans.e_empresa_trans.vc_desc_empresa_trans    = or["vc_desc_empresa_trans"].ToText();
            if (Convertidor.Ec(or, "vc_ruc"))
                m.me_empresa_trans.e_empresa_trans.vc_ruc                   = or["vc_ruc"].ToText();
            if (Convertidor.Ec(or, "ch_status"))
                m.e_tran.ch_tran_stdo_regi                                  = or["ch_status"].ToText();
            if (Convertidor.Ec(or, "dt_fec_reg"))
                m.e_tran.dt_tran_fech_regi                                  = or["dt_fec_reg"].ToDateTime();
            if (Convertidor.Ec(or, "vc_usr_reg"))
                m.e_tran.vc_tran_usua_regi                                  = or["vc_usr_reg"].ToText();
            if (Convertidor.Ec(or, "vc_direccion"))
                m.me_empresa_trans.e_empresa_trans.vc_direccion             = or["vc_direccion"].ToText();
            if (Convertidor.Ec(or, "vc_resolucion"))
                m.me_empresa_trans.e_empresa_trans.vc_resolucion            = or["vc_resolucion"].ToText();

            return m;
        }
    }
}
