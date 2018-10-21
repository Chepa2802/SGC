using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using Entidad;
using Entidad.Sistema;

namespace MacroEntidad
{
    [Serializable]
    [DataContract]
    public class ME_Tipo_Doc_Identidad : E_Transaccion
    {
        [DataMember] public E_Tipo_Doc_Identidad    e_tipo_doc_identidad { get; set; }

        public ME_Tipo_Doc_Identidad()
        {
            e_tipo_doc_identidad = new E_Tipo_Doc_Identidad();
        }
    }
}
