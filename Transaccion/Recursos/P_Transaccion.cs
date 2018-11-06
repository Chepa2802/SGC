using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.Common;
using Microsoft.Practices.EnterpriseLibrary.Data;
using Entidad.Sistema;

namespace Transaccion.Recursos
{
    public class P_Transaccion
    {
        public static DbCommand iGet(Database db, DbCommand cmd, E_Transaccion e_tran)
        {
            db.AddInParameter(cmd, "@nu_tran_ruta", DbType.Int32, e_tran.nu_tran_ruta);
            db.AddInParameter(cmd, "@vc_tran_clve_find", DbType.String, e_tran.vc_tran_clve_find);
            db.AddInParameter(cmd, "@vc_tran_usua_ptcn", DbType.String, e_tran.vc_tran_usua_ptcn);

            db.AddOutParameter(cmd, "@nu_tran_stdo", DbType.Int32, 1);
            db.AddOutParameter(cmd, "@tx_tran_mnsg", DbType.String, 5000);

            return cmd;
        }

        public static void sGet(Database db, DbCommand cmd, E_Transaccion e_tran)
        {
            try
            {
                e_tran.nu_tran_stdo = int.Parse(db.GetParameterValue(cmd, "@nu_tran_stdo").ToString());
                e_tran.tx_tran_mnsg = db.GetParameterValue(cmd, "@tx_tran_mnsg").ToString();
            }
            catch (Exception)
            {
                e_tran.nu_tran_stdo = 1;
                e_tran.tx_tran_mnsg = "Petición realizada";
            }
        }

        public static DbCommand iIns(Database db, DbCommand cmd, E_Transaccion e_tran)
        {
            db.AddInParameter(cmd, "@ch_tran_stdo_regi", DbType.String, e_tran.ch_tran_stdo_regi);
            db.AddInParameter(cmd, "@nu_tran_ruta", DbType.Int32, e_tran.nu_tran_ruta);
            db.AddInParameter(cmd, "@vc_tran_usua_regi", DbType.String, e_tran.vc_tran_usua_regi);

            db.AddOutParameter(cmd, "@nu_tran_pkey", DbType.Decimal, 20);
            db.AddOutParameter(cmd, "@vc_tran_codi", DbType.String, 25);
            db.AddOutParameter(cmd, "@nu_tran_stdo", DbType.Int32, 1);
            db.AddOutParameter(cmd, "@tx_tran_mnsg", DbType.String, 5000);

            return cmd;
        }

        public static void sIns(Database db, DbCommand cmd, E_Transaccion e_tran)
        {

            e_tran.nu_tran_pkey = Decimal.Parse(db.GetParameterValue(cmd, "@nu_tran_pkey").ToString());
            e_tran.vc_tran_codi = db.GetParameterValue(cmd, "@vc_tran_codi").ToString();
            e_tran.nu_tran_stdo = int.Parse(db.GetParameterValue(cmd, "@nu_tran_stdo").ToString());
            e_tran.tx_tran_mnsg = db.GetParameterValue(cmd, "@tx_tran_mnsg").ToString();
        }

        public static DbCommand iUpd(Database db, DbCommand cmd, E_Transaccion e_tran)
        {
            db.AddInParameter(cmd, "@ch_tran_stdo_regi", DbType.String, e_tran.ch_tran_stdo_regi);
            db.AddInParameter(cmd, "@nu_tran_ruta", DbType.Int32, e_tran.nu_tran_ruta);
            db.AddInParameter(cmd, "@vc_tran_usua_modi", DbType.String, e_tran.vc_tran_usua_modi);

            db.AddOutParameter(cmd, "@nu_tran_pkey", DbType.Decimal, 20);
            db.AddOutParameter(cmd, "@vc_tran_codi", DbType.String, 25);
            db.AddOutParameter(cmd, "@nu_tran_stdo", DbType.Int32, 1);
            db.AddOutParameter(cmd, "@tx_tran_mnsg", DbType.String, 5000);

            return cmd;
        }

        public static void sUpd(Database db, DbCommand cmd, E_Transaccion e_tran)
        {
            e_tran.nu_tran_pkey = Decimal.Parse(db.GetParameterValue(cmd, "@nu_tran_pkey").ToString());
            e_tran.vc_tran_codi = db.GetParameterValue(cmd, "@vc_tran_codi").ToString();
            e_tran.nu_tran_stdo = int.Parse(db.GetParameterValue(cmd, "@nu_tran_stdo").ToString());
            e_tran.tx_tran_mnsg = db.GetParameterValue(cmd, "@tx_tran_mnsg").ToString();
        }
    }
}
