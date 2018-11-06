using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Common;
using Transaccion;
using MultiEntidad.Solucion;

namespace Procedimiento
{
    public static class P_Proyecto
    {
        static private T_Proyecto _T_Proyecto;

        public static void Origen(string cn)
        {
            _T_Proyecto = new T_Proyecto(cn);
        }

        public static List<MME_Proyecto> SelUsuario(MME_Proyecto M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            DbCommand cmd = null;
            List<MME_Proyecto> ls = null;
            try
            {
                ls = _T_Proyecto.SelUsuario(ref cmd, M);
            }
            catch (Exception ex) { throw ex; }
            finally { cmd.Connection.Close(); }
            return ls;
        }
    }
}
