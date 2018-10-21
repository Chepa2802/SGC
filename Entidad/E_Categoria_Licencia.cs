using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace Entidad
{
    [Serializable]
    [DataContract]
    public class E_Categoria_Licencia
    {
        [DataMember] public int?    nu_id_categoria_licencia        { get; set; }
        [DataMember] public string  vc_cod_categoria_licencia       { get; set; }
        [DataMember] public string  vc_desc_categoria_licencia      { get; set; }
    }
}
