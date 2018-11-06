using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace Entidad
{
    [Serializable]
    [DataContract]
    public class E_Conductor
    {
        [DataMember]public int?         nu_id_conductor         { get; set; }
        [DataMember]public string       vc_cod_conductor        { get; set; }
        [DataMember]public string       vc_apellido_paterno     { get; set; }
        [DataMember]public string       vc_apellido_materno     { get; set; }
        [DataMember]public string       vc_nombres              { get; set; }
        [DataMember]public string       vc_nombre_completo      { get; set; }
        [DataMember]public string       vc_nro_doc_identidad    { get; set; }
        [DataMember]public DateTime?    dt_fec_inicio           { get; set; }
        [DataMember]public DateTime?    dt_fec_final            { get; set; }
        [DataMember]public string       vc_nro_licencia         { get; set; }
        [DataMember]public string       vc_ruta_foto            { get; set; }
        [DataMember]public DateTime     dt_fec_nacimiento       { get; set; }
        [DataMember]public string       vc_nro_padron           { get; set; }
        [DataMember]public string       vc_nro_placa            { get; set; }
        [DataMember]public string       vc_nombre_propietario   { get; set; }
        [DataMember]public string       vc_nro_telefono         { get; set; }
        [DataMember]public string       vc_direccion            { get; set; }
        [DataMember]public string       ch_donacion_organo      { get; set; }
        [DataMember] public string      vc_restricciones        { get; set; }

    }
}
