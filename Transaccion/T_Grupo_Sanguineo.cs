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
    public class T_Grupo_Sanguineo : SqlCn
    {
        public T_Grupo_Sanguineo(string Cn) : base(Cn) { }

        public List<MME_Grupo_Sanguineo> Sel(ref DbCommand cmd, MME_Grupo_Sanguineo m)
        {
            List<MME_Grupo_Sanguineo> lm = new List<MME_Grupo_Sanguineo>();
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_SEL_GRUPO_SANGUINEO"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_GRUPO_SANGUINEO", DbType.Decimal, m.me_grupo_sanguineo.e_grupo_sanguineo.nu_id_grupo_sanguineo);
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

        private List<MME_Grupo_Sanguineo> LMme(IDataReader or)
        {
            var ls_mme = new List<MME_Grupo_Sanguineo>();
            while (or.Read())
            {
                ls_mme.Add(Mme(or));
            }
            return ls_mme;
        }

        private MME_Grupo_Sanguineo Mme(IDataReader or)
        {
            MME_Grupo_Sanguineo m = new MME_Grupo_Sanguineo();

            //Tipo documento de Identidad
            if (Convertidor.Ec(or, "nu_id_grupo_sanguineo"))
                m.me_grupo_sanguineo.e_grupo_sanguineo.nu_id_grupo_sanguineo = or["nu_id_grupo_sanguineo"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_grupo_sanguineo"))
                m.me_grupo_sanguineo.e_grupo_sanguineo.vc_cod_grupo_sanguineo = or["vc_cod_grupo_sanguineo"].ToText();
            if (Convertidor.Ec(or, "vc_desc_grupo_sanguineo"))
                m.me_grupo_sanguineo.e_grupo_sanguineo.vc_desc_grupo_sanguineo = or["vc_desc_grupo_sanguineo"].ToText();

            return m;
        }
    }
}
