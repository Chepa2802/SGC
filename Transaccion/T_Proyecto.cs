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
    public class T_Proyecto : SqlCn
    {
        public T_Proyecto(string Cn) : base(Cn) { }

        public List<MME_Proyecto> SelUsuario(ref DbCommand cmd, MME_Proyecto m)
        {
            List<MME_Proyecto> lm = new List<MME_Proyecto>();
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_SEL_PROYECTO_USUARIO"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@VC_USUARIO", DbType.String, m.e_tran.vc_tran_usua_ptcn);
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

        private List<MME_Proyecto> LMme(IDataReader or)
        {
            var ls_mme = new List<MME_Proyecto>();
            while (or.Read())
            {
                ls_mme.Add(Mme(or));
            }
            return ls_mme;
        }

        private MME_Proyecto Mme(IDataReader or)
        {
            MME_Proyecto m = new MME_Proyecto();

            //Proyecto
            if (Convertidor.Ec(or, "nu_id_proyecto"))
                m.me_proyecto.e_proyecto.nu_id_proyecto         = or["nu_id_proyecto"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_proyecto"))
                m.me_proyecto.e_proyecto.vc_cod_proyecto        = or["vc_cod_proyecto"].ToText();
            if (Convertidor.Ec(or, "vc_desc_proyecto"))
                m.me_proyecto.e_proyecto.vc_desc_proyecto       = or["vc_desc_proyecto"].ToText();

            return m;
        }
    }
}
