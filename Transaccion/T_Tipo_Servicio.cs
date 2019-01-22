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
    public class T_Tipo_Servicio : SqlCn
    {
        public T_Tipo_Servicio(string Cn) : base(Cn) { }

        public List<MME_Tipo_Servicio> Sel(ref DbCommand cmd, MME_Tipo_Servicio m)
        {
            List<MME_Tipo_Servicio> lm = new List<MME_Tipo_Servicio>();
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_SEL_TIPO_SERVICIO"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_TIPO_SERVICIO", DbType.Decimal, m.me_tipo_servicio.e_tipo_servicio.nu_id_tipo_servicio);
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

        private List<MME_Tipo_Servicio> LMme(IDataReader or)
        {
            var ls_mme = new List<MME_Tipo_Servicio>();
            while (or.Read())
            {
                ls_mme.Add(Mme(or));
            }
            return ls_mme;
        }

        private MME_Tipo_Servicio Mme(IDataReader or)
        {
            MME_Tipo_Servicio m = new MME_Tipo_Servicio();

            //Tipo de Servicio
            if (Convertidor.Ec(or, "nu_id_tipo_servicio"))
                m.me_tipo_servicio.e_tipo_servicio.nu_id_tipo_servicio = or["nu_id_tipo_servicio"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_tipo_servicio"))
                m.me_tipo_servicio.e_tipo_servicio.vc_cod_tipo_servicio = or["vc_cod_tipo_servicio"].ToText();
            if (Convertidor.Ec(or, "vc_desc_tipo_servicio"))
                m.me_tipo_servicio.e_tipo_servicio.vc_desc_tipo_servicio = or["vc_desc_tipo_servicio"].ToText();

            return m;
        }
    }
}
