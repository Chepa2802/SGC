using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;

namespace Entidad.Sistema
{
    [Serializable]
    [DataContract]
    public class E_Usuario
    {
        [DataMember] public int         nu_id_usuasrio      { get; set; }
        [DataMember] public string      vc_usuario          { get; set; }
        [DataMember] public string      vc_contraseña       { get; set; }
    }
}
