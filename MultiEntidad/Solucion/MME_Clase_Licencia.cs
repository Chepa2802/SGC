using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using MacroEntidad;

namespace MultiEntidad.Solucion
{
    [Serializable]
    [DataContract]
    public class MME_Clase_Licencia : MME_Transaccion
    {
        [DataMember] public ME_Clase_Licencia me_clase_licencia { get; set; }

        public MME_Clase_Licencia()
        {
            me_clase_licencia = new ME_Clase_Licencia();
        }
    }
}
