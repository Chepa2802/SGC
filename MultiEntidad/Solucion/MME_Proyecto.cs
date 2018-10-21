using System;
using System.Runtime.Serialization;
using MacroEntidad;

namespace MultiEntidad.Solucion
{
    [Serializable]
    [DataContract]
    public class MME_Proyecto : MME_Transaccion
    {
        [DataMember] public ME_Proyecto me_proyecto { get; set; }

        public MME_Proyecto()
        {
            me_proyecto = new ME_Proyecto();
        }
    }
}
