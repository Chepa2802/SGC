using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace Entidad
{
    [Serializable]
    [DataContract]
    public class E_Clase_Licencia
    {
        [DataMember] public int?    nu_id_clase_licencia        { get; set; }
        [DataMember] public string  vc_cod_clase_licencia       { get; set; }
        [DataMember] public string  vc_desc_clase_licencia      { get; set; }
    }
}
