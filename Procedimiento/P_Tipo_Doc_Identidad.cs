using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Common;
using Transaccion;
using MultiEntidad.Solucion;

namespace Procedimiento
{
    public static class P_Tipo_Doc_Identidad
    {
        static private T_Tipo_Doc_Idendidad _T_Tipo_Doc_Idendidad;

        public static void Origen(string cn)
        {
            _T_Tipo_Doc_Idendidad = new T_Tipo_Doc_Idendidad(cn);
        }

        public static List<MME_Tipo_Doc_Identidad> Sel(MME_Tipo_Doc_Identidad M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            DbCommand cmd = null;
            List<MME_Tipo_Doc_Identidad> ls = null;
            try
            {
                ls = _T_Tipo_Doc_Idendidad.Sel(ref cmd, M);
            }
            catch (Exception ex) { throw ex; }
            finally { cmd.Connection.Close(); }
            return ls;
        }
    }
}
