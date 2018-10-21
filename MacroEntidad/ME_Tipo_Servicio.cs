using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using Entidad;
using Entidad.Sistema;

namespace MacroEntidad
{
    [Serializable]
    [DataContract]
    public class ME_Tipo_Servicio : E_Transaccion
    {
        [DataMember] public E_Tipo_Servicio e_tipo_servicio { get; set; }

        public ME_Tipo_Servicio()
        {
            e_tipo_servicio = new E_Tipo_Servicio();
        }
    }
}
