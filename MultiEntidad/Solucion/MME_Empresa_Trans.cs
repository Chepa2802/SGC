using System;
using System.Runtime.Serialization;
using MacroEntidad;

namespace MultiEntidad.Solucion
{
    [Serializable]
    [DataContract]
    public class MME_Empresa_Trans : MME_Transaccion
    {
        public ME_Empresa_Trans     me_empresa_trans { get; set; }

        public MME_Empresa_Trans()
        {
            me_empresa_trans = new ME_Empresa_Trans();
        }
    }
}
