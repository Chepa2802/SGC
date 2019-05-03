using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Common;
using Transaccion;
using MultiEntidad.Solucion;

namespace Procedimiento
{
    public static class P_Tipo_Servicio
    {
        static private T_Tipo_Servicio _T_Tipo_Servicio;

        public static void Origen(string cn)
        {
            _T_Tipo_Servicio = new T_Tipo_Servicio(cn);
        }

        public static List<MME_Tipo_Servicio> Sel(MME_Tipo_Servicio M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            DbCommand cmd = null;
            List<MME_Tipo_Servicio> ls = null;
            try
            {
                ls = _T_Tipo_Servicio.Sel(ref cmd, M);
            }
            catch (Exception ex) { throw ex; }
            finally { cmd.Connection.Close(); }
            return ls;
        }
    }
}
