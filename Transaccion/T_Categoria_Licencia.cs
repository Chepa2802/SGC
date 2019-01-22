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
    public class T_Categoria_Licencia : SqlCn
    {
        public T_Categoria_Licencia(string Cn) : base(Cn) { }

        public List<MME_Categoria_Licencia> Sel(ref DbCommand cmd, MME_Categoria_Licencia m)
        {
            List<MME_Categoria_Licencia> lm = new List<MME_Categoria_Licencia>();
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_SEL_CATEGORIA_LICENCIA"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_CATEGORIA_LICENCIA", DbType.Decimal, m.me_categoria_licencia.e_categoria_licencia.nu_id_categoria_licencia);
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

        private List<MME_Categoria_Licencia> LMme(IDataReader or)
        {
            var ls_mme = new List<MME_Categoria_Licencia>();
            while (or.Read())
            {
                ls_mme.Add(Mme(or));
            }
            return ls_mme;
        }

        private MME_Categoria_Licencia Mme(IDataReader or)
        {
            MME_Categoria_Licencia m = new MME_Categoria_Licencia();

            //Categoria Licencia
            if (Convertidor.Ec(or, "nu_id_categoria_licencia"))
                m.me_categoria_licencia.e_categoria_licencia.nu_id_categoria_licencia = or["nu_id_categoria_licencia"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_categoria_licencia"))
                m.me_categoria_licencia.e_categoria_licencia.vc_cod_categoria_licencia = or["vc_cod_categoria_licencia"].ToText();
            if (Convertidor.Ec(or, "vc_desc_categoria_licencia"))
                m.me_categoria_licencia.e_categoria_licencia.vc_desc_categoria_licencia = or["vc_desc_categoria_licencia"].ToText();

            return m;
        }
    }
}
