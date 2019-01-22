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
    public static class P_Empresa_Trans
    {
        static private T_Empresa_Transp _T_Empresa_Trans;

        public static void Origen(string cn)
        {
            _T_Empresa_Trans = new T_Empresa_Transp(cn);
        }

        public static List<MME_Empresa_Trans> Sel(MME_Empresa_Trans M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            DbCommand cmd = null;
            List<MME_Empresa_Trans> ls = null;
            try
            {
                ls = _T_Empresa_Trans.Sel(ref cmd, M);
            }
            catch (Exception ex) { throw ex; }
            finally { cmd.Connection.Close(); }
            return ls;
        }

        public static MME_Empresa_Trans Get(MME_Empresa_Trans M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            try
            {
                M = _T_Empresa_Trans.Get(M);
                return M;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static MME_Empresa_Trans Ins(MME_Empresa_Trans M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            try
            {
                M = _T_Empresa_Trans.Ins(M);
                return M;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static MME_Empresa_Trans Upd(MME_Empresa_Trans M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            try
            {
                M = _T_Empresa_Trans.Upd(M);
                return M;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static MME_Empresa_Trans Upd_Estado(MME_Empresa_Trans M)
        {
            Origen(M.e_tran.vc_conexion_origen);
            try
            {
                M = _T_Empresa_Trans.Upd_Estado(M);
                return M;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
