using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using MacroEntidad;

namespace MultiEntidad.Solucion
{
    [Serializable]
    [DataContract]
    public class MME_Conductor : MME_Transaccion
    {
        public ME_Conductor me_conductor { get; set; }

        public MME_Conductor()
        {
            me_conductor = new ME_Conductor();
        }
    }
}
