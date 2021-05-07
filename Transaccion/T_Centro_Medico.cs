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
    public class T_Centro_Medico : SqlCn
    {
        public T_Centro_Medico(string Cn) : base(Cn) { }

        public List<MME_Centro_Medico> Sel(ref DbCommand cmd, MME_Centro_Medico m)
        {
            List<MME_Centro_Medico> lm = new List<MME_Centro_Medico>();
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.USP_SEL_CENTRO_MEDICO"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_PROYECTO", DbType.Decimal, m.me_centro_medico.e_proyecto.nu_id_proyecto);
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

        private List<MME_Centro_Medico> LMme(IDataReader or)
        {
            var ls_mme = new List<MME_Centro_Medico>();
            while (or.Read())
            {
                ls_mme.Add(Mme(or));
            }
            return ls_mme;
        }

        private MME_Centro_Medico Mme(IDataReader or)
        {
            MME_Centro_Medico m = new MME_Centro_Medico();

            //Centro Médico
            if (Convertidor.Ec(or, "nu_id_centro_medico"))
                m.me_centro_medico.e_centro_medico.nu_id_centro_medico      = or["nu_id_centro_medico"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_centro_medico"))
                m.me_centro_medico.e_centro_medico.vc_cod_centro_medico     = or["vc_cod_centro_medico"].ToText();
            if (Convertidor.Ec(or, "vc_desc_centro_medico"))
                m.me_centro_medico.e_centro_medico.vc_desc_centro_medico    = or["vc_desc_centro_medico"].ToText();

            return m;
        }
    }
}
