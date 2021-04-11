using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using MacroEntidad;

namespace MultiEntidad.Solucion
{
    [Serializable]
    [DataContract]
    public class MME_Centro_Medico : MME_Transaccion
    {
        [DataMember] public ME_Centro_Medico me_centro_medico { get; set; }

        public MME_Centro_Medico()
        {
            me_centro_medico            = new ME_Centro_Medico();
        }
    }
}
