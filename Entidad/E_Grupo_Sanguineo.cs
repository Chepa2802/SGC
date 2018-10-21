using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace Entidad
{
    [Serializable]
    [DataContract]
    public class E_Grupo_Sanguineo
    {
        [DataMember] public int?    nu_id_grupo_sanguineo        { get; set; }
        [DataMember] public string  vc_cod_grupo_sanguineo       { get; set; }
        [DataMember] public string  vc_desc_grupo_sanguineo      { get; set; }
    }
}
