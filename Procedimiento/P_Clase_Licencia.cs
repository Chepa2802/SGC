using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Common;
using Transaccion;
using MultiEntidad.Solucion;

namespace Procedimiento
{
    public static class P_Clase_Licencia
    {
        static private T_Clase_Licencia _T_Clase_Licencia;

        public static void Origen(string cn)
        {
            _T_Clase_Licencia = new T_Clase_Licencia(cn);
        }

        public static List<MME_Clase_Licencia> Sel(MME_Clase_Licencia M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            DbCommand cmd = null;
            List<MME_Clase_Licencia> ls = null;
            try
            {
                ls = _T_Clase_Licencia.Sel(ref cmd, M);
            }
            catch (Exception ex) { throw ex; }
            finally { cmd.Connection.Close(); }
            return ls;
        }
    }
}
