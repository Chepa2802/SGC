using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.Common;
using Transaccion;
using MultiEntidad.Solucion;


namespace Procedimiento
{
    public static class P_Conductor
    {
        static private T_Conductor _T_Conductor;

        public static void Origen(string cn)
        {
            _T_Conductor = new T_Conductor(cn);
        }

        public static List<MME_Conductor> Sel(MME_Conductor M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            DbCommand cmd = null;
            List<MME_Conductor> ls = null;
            try
            {
                ls = _T_Conductor.Sel(ref cmd, M);
            }
            catch (Exception ex) { throw ex; }
            finally { cmd.Connection.Close(); }
            return ls;
        }

        public static MME_Conductor Get(MME_Conductor M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            DbCommand cmd = null;
            try
            {
                M = _T_Conductor.Get(ref cmd, M);
            }
            catch (Exception ex) { throw ex; }
            finally { cmd.Connection.Close(); }
            return M;
        }

        public static MME_Conductor Ins(MME_Conductor M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            try
            {
                M = _T_Conductor.Ins(M);
            }
            catch (Exception ex) { throw ex; }
            return M;
        }

        public static MME_Conductor Upd(MME_Conductor M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            try
            {
                M = _T_Conductor.Upd(M);
            }
            catch (Exception ex) { throw ex; }
            return M;
        }

        public static MME_Conductor UpdEstado(MME_Conductor M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            try
            {
                M = _T_Conductor.UpdEstado(M);
            }
            catch (Exception ex) { throw ex; }
            return M;
        }
    }
}
