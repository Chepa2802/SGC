using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace Entidad
{
    [Serializable]
    [DataContract]
    public class E_Tipo_Doc_Identidad
    {
        [DataMember]public int?     nu_id_tipo_doc_identidad    { get; set; }
        [DataMember]public string   vc_cod_tipo_doc_identidad   { get; set; }
        [DataMember] public string  vc_desc_tipo_doc_identidad  { get; set; }
    }
}
