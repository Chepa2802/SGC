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
    public class T_Clase_Licencia : SqlCn
    {
        public T_Clase_Licencia(string Cn) : base(Cn) { }

        public List<MME_Clase_Licencia> Sel(ref DbCommand cmd, MME_Clase_Licencia m)
        {
            List<MME_Clase_Licencia> lm = new List<MME_Clase_Licencia>();
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_SEL_CLASE_LICENCIA"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_CLASE_LICENCIA", DbType.Decimal, m.me_clase_licencia.e_clase_licencia.nu_id_clase_licencia);
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

        private List<MME_Clase_Licencia> LMme(IDataReader or)
        {
            var ls_mme = new List<MME_Clase_Licencia>();
            while (or.Read())
            {
                ls_mme.Add(Mme(or));
            }
            return ls_mme;
        }

        private MME_Clase_Licencia Mme(IDataReader or)
        {
            MME_Clase_Licencia m = new MME_Clase_Licencia();

            //Clase Licencia
            if (Convertidor.Ec(or, "nu_id_clase_licencia"))
                m.me_clase_licencia.e_clase_licencia.nu_id_clase_licencia = or["nu_id_clase_licencia"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_clase_licencia"))
                m.me_clase_licencia.e_clase_licencia.vc_cod_clase_licencia = or["vc_cod_clase_licencia"].ToText();
            if (Convertidor.Ec(or, "vc_desc_clase_licencia"))
                m.me_clase_licencia.e_clase_licencia.vc_desc_clase_licencia = or["vc_desc_clase_licencia"].ToText();

            return m;
        }
    }
}
