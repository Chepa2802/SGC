using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace Entidad
{
    [Serializable]
    [DataContract]
    public class E_Centro_Medico
    {
        [DataMember]public decimal? nu_id_centro_medico     { get; set; }
        [DataMember]public string   vc_cod_centro_medico    { get; set; }
        [DataMember]public string   vc_desc_centro_medico   { get; set; }
    }
}
