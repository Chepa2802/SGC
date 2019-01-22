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
    public class T_Tipo_Doc_Idendidad : SqlCn
    {
        public T_Tipo_Doc_Idendidad(string Cn) : base(Cn) { }

        public List<MME_Tipo_Doc_Identidad> Sel(ref DbCommand cmd, MME_Tipo_Doc_Identidad m)
        {
            List<MME_Tipo_Doc_Identidad> lm = new List<MME_Tipo_Doc_Identidad>();
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_SEL_TIPO_DOC_IDENTIDAD"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@NU_ID_TIPO_DOC_IDENTIDAD", DbType.Decimal, m.me_tipo_doc_identidad.e_tipo_doc_identidad.nu_id_tipo_doc_identidad);
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

        private List<MME_Tipo_Doc_Identidad> LMme(IDataReader or)
        {
            var ls_mme = new List<MME_Tipo_Doc_Identidad>();
            while (or.Read())
            {
                ls_mme.Add(Mme(or));
            }
            return ls_mme;
        }

        private MME_Tipo_Doc_Identidad Mme(IDataReader or)
        {
            MME_Tipo_Doc_Identidad m = new MME_Tipo_Doc_Identidad();

            //Tipo documento de Identidad
            if (Convertidor.Ec(or, "nu_id_tipo_doc_identidad"))
                m.me_tipo_doc_identidad.e_tipo_doc_identidad.nu_id_tipo_doc_identidad = or["nu_id_tipo_doc_identidad"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_tipo_doc_identidad"))
                m.me_tipo_doc_identidad.e_tipo_doc_identidad.vc_cod_tipo_doc_identidad = or["vc_cod_tipo_doc_identidad"].ToText();
            if (Convertidor.Ec(or, "vc_desc_tipo_doc_identidad"))
                m.me_tipo_doc_identidad.e_tipo_doc_identidad.vc_desc_tipo_doc_identidad = or["vc_desc_tipo_doc_identidad"].ToText();

            return m;
        }
    }
}
