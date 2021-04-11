using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.Common;
using Transaccion;
using MultiEntidad.Solucion;

namespace Procedimiento
{
    public static class P_Centro_Medico
    {
        static private T_Centro_Medico _T_Centro_Medico;

        public static void Origen(string cn)
        {
            _T_Centro_Medico = new T_Centro_Medico(cn);
        }

        public static List<MME_Centro_Medico> Sel(MME_Centro_Medico M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            DbCommand cmd = null;
            List<MME_Centro_Medico> ls = null;
            try
            {
                ls = _T_Centro_Medico.Sel(ref cmd, M);
            }
            catch (Exception ex) { throw ex; }
            finally { cmd.Connection.Close(); }
            return ls;
        }
    }
}
