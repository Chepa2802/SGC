using System;
using System.Runtime.Serialization;
using Entidad;
using Entidad.Sistema;

namespace MacroEntidad
{
    [Serializable]
    [DataContract]
    public class ME_Proyecto : E_Transaccion
    {
        [DataMember] public E_Proyecto e_proyecto { get; set; }

        public ME_Proyecto()
        {
            e_proyecto = new E_Proyecto();
        }
    }
}
