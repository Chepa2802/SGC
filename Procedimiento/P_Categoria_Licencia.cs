using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Common;
using Transaccion;
using MultiEntidad.Solucion;

namespace Procedimiento
{
    public static class P_Categoria_Licencia
    {
        static private T_Categoria_Licencia _T_Categoria_Licencia;

        public static void Origen(string cn)
        {
            _T_Categoria_Licencia = new T_Categoria_Licencia(cn);
        }

        public static List<MME_Categoria_Licencia> Sel(MME_Categoria_Licencia M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            DbCommand cmd = null;
            List<MME_Categoria_Licencia> ls = null;
            try
            {
                ls = _T_Categoria_Licencia.Sel(ref cmd, M);
            }
            catch (Exception ex) { throw ex; }
            finally { cmd.Connection.Close(); }
            return ls;
        }
    }
}
