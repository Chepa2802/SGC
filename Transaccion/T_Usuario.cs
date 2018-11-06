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
    public class T_Usuario : SqlCn
    {
        public T_Usuario(string Cn) : base(Cn) { }

        public MME_Usuario Acceder(ref DbCommand cmd, MME_Usuario m)
        {
            try
            {
                using (cmd = db.GetStoredProcCommand("dbo.SP_PROC_ACCESO"))
                {
                    cmd.CommandTimeout = int.Parse(ConfigurationManager.AppSettings["Delay"]);
                    db.AddInParameter(cmd, "@VC_USUARIO", DbType.String, m.me_usuario.e_usuario.vc_usuario);
                    db.AddInParameter(cmd, "@VC_CONTRASEÑA", DbType.String, m.me_usuario.e_usuario.vc_contraseña);
                    db.AddInParameter(cmd, "@NU_ID_PROYECTO", DbType.Decimal, m.me_usuario.e_proyecto.nu_id_proyecto);
                    P_Transaccion.iGet(db, cmd, m.e_tran);
                    IDataReader or = db.ExecuteReader(cmd);
                    if (or.Read())
                        m = Mme(or);
                    P_Transaccion.sGet(db, cmd, m.e_tran);
                    or.Close();
                    return m;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private MME_Usuario Mme(IDataReader or)
        {
            MME_Usuario m = new MME_Usuario();

            //Proyecto
            if (Convertidor.Ec(or, "nu_id_proyecto"))
                m.me_usuario.e_proyecto.nu_id_proyecto          = or["nu_id_proyecto"].ToInt();
            if (Convertidor.Ec(or, "vc_cod_proyecto"))
                m.me_usuario.e_proyecto.vc_cod_proyecto         = or["vc_cod_proyecto"].ToText();
            if (Convertidor.Ec(or, "vc_desc_proyecto"))
                m.me_usuario.e_proyecto.vc_desc_proyecto        = or["vc_desc_proyecto"].ToText();

            //USUARIO
            if (Convertidor.Ec(or, "vc_usuario"))
                m.me_usuario.e_usuario.vc_usuario               = or["vc_usuario"].ToText();
            if (Convertidor.Ec(or, "vc_contraseña"))
                m.me_usuario.e_usuario.vc_contraseña            = or["vc_contraseña"].ToText();

            return m;
        }
    }
}
