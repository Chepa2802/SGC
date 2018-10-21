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
    public class ME_Grupo_Sanguineo : E_Transaccion 
    {
        [DataMember] public E_Grupo_Sanguineo e_grupo_sanguineo { get; set; }

        public ME_Grupo_Sanguineo()
        {
            e_grupo_sanguineo = new E_Grupo_Sanguineo();
        }
    }
}
