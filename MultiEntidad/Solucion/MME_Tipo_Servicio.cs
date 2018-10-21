using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using MacroEntidad;

namespace MultiEntidad.Solucion
{
    [Serializable]
    [DataContract]
    public class MME_Tipo_Servicio : MME_Transaccion
    {
        [DataMember] public ME_Tipo_Servicio me_tipo_servicio { get; set; }

        public MME_Tipo_Servicio()
        {
            me_tipo_servicio = new ME_Tipo_Servicio();
        }
    }
}
