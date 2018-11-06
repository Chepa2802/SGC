using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Common;
using Transaccion;
using MultiEntidad.Solucion;

namespace Procedimiento
{
    public class P_Usuario
    {
        static private T_Usuario _T_Usuario;
        public static void Origen(string cn)
        {
            _T_Usuario = new T_Usuario(cn);
        }

        public static MME_Usuario Acceder(MME_Usuario M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            DbCommand cmd = null;
            try
            {
                M = _T_Usuario.Acceder(ref cmd, M);
            }
            catch (Exception ex) { throw ex; }
            finally { cmd.Connection.Close(); }
            return M;
        }
    }
}
