using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using MacroEntidad;

namespace MultiEntidad.Solucion
{
    [Serializable]
    [DataContract]
    public class MME_Usuario :  MME_Transaccion
    {
        [DataMember] public ME_Usuario      me_usuario  { get; set; }

        public MME_Usuario()
        {
            me_usuario = new ME_Usuario();
        }
    }
}
