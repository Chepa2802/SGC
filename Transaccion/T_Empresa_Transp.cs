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

            return m;
        }
    }
}
