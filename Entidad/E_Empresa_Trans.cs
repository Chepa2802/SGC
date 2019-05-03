using System;
using System.Runtime.Serialization;

namespace Entidad
{
    [Serializable]
    [DataContract]
    public class E_Empresa_Trans
    {
        [DataMember]public int?    nu_id_empresa_trans  { get; set; }
        [DataMember]public string  vc_cod_empresa_trans { get; set; }
        [DataMember]public string  vc_desc_empresa_trans { get; set; }
        [DataMember]public string  vc_ruc               { get; set; }
        [DataMember]public string  vc_direccion         { get; set; }
        [DataMember]public string  vc_resolucion        { get; set; }

    }
}
