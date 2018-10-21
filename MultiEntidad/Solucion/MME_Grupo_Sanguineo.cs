using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using MacroEntidad;

namespace MultiEntidad.Solucion
{
    [Serializable]
    [DataContract]
    public class MME_Grupo_Sanguineo : MME_Transaccion
    {
        [DataMember] public ME_Grupo_Sanguineo me_grupo_sanguineo { get; set; }

        public MME_Grupo_Sanguineo()
        {
            me_grupo_sanguineo = new ME_Grupo_Sanguineo();
        }
    }
}
