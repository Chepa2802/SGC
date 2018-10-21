using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using MacroEntidad;

namespace MultiEntidad.Solucion
{
    [Serializable]
    [DataContract]
    public class MME_Tipo_Doc_Identidad : MME_Transaccion
    {
        [DataMember] public ME_Tipo_Doc_Identidad   me_tipo_doc_identidad { get; set; }

        public MME_Tipo_Doc_Identidad()
        {
            me_tipo_doc_identidad = new ME_Tipo_Doc_Identidad();
        }
    }
}
