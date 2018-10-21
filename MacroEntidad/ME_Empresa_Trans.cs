using System;
using System.Runtime.Serialization;
using Entidad;
using Entidad.Sistema;

namespace MacroEntidad
{
    [Serializable]
    [DataContract]
    public class ME_Empresa_Trans : E_Transaccion
    {
        [DataMember] public E_Empresa_Trans e_empresa_trans { get; set; }
        [DataMember] public E_Proyecto      e_proyecto { get; set; }

        public ME_Empresa_Trans()
        {
            e_empresa_trans = new E_Empresa_Trans();
            e_proyecto = new E_Proyecto();
        }
    }
}
