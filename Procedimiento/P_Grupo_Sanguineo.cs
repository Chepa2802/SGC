using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Common;
using Transaccion;
using MultiEntidad.Solucion;

namespace Procedimiento
{
    public static class P_Grupo_Sanguineo
    {
        static private T_Grupo_Sanguineo _T_Grupo_Sanguineo;

        public static void Origen(string cn)
        {
            _T_Grupo_Sanguineo = new T_Grupo_Sanguineo(cn);
        }

        public static List<MME_Grupo_Sanguineo> Sel(MME_Grupo_Sanguineo M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            DbCommand cmd = null;
            List<MME_Grupo_Sanguineo> ls = null;
            try
            {
                ls = _T_Grupo_Sanguineo.Sel(ref cmd, M);
            }
            catch (Exception ex) { throw ex; }
            finally { cmd.Connection.Close(); }
            return ls;
        }
    }
}
