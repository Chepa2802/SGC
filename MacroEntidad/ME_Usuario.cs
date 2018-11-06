using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using Entidad.Sistema;
using Entidad;

namespace MacroEntidad
{
    [Serializable]
    [DataContract]
    public class ME_Usuario
    {
        [DataMember] public E_Usuario    e_usuario  { get; set; }
        [DataMember] public E_Proyecto  e_proyecto  { get; set; }

        public ME_Usuario()
        {
            e_usuario   = new E_Usuario();
            e_proyecto  = new E_Proyecto();
        }
    }
}
