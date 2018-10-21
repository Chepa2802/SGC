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
    public class ME_Clase_Licencia : E_Transaccion
    {
        [DataMember] public E_Clase_Licencia e_clase_licencia { get; set; }

        public ME_Clase_Licencia()
        {
            e_clase_licencia = new E_Clase_Licencia();
        }
    }
}
