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
    public class ME_Centro_Medico
    {
        [DataMember] public E_Proyecto                  e_proyecto              { get; set; }
        [DataMember] public E_Centro_Medico             e_centro_medico         { get; set; }

        public ME_Centro_Medico()
        {
            e_centro_medico         = new E_Centro_Medico();
            e_proyecto              = new E_Proyecto();
        }
    }
}
