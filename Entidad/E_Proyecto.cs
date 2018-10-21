using System;
using System.Runtime.Serialization;

namespace Entidad
{
    [Serializable]
    [DataContract]
    public class E_Proyecto
    {
        [DataMember]public int?      nu_id_proyecto { get; set; }
        [DataMember]public string   vc_cod_proyecto { get; set; }
        [DataMember]public string   vc_desc_proyecto { get; set; }

    }
}
