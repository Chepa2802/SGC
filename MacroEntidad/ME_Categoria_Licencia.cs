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
    public class ME_Categoria_Licencia : E_Transaccion
    {
        [DataMember] public E_Categoria_Licencia e_categoria_licencia { get; set; }

        public ME_Categoria_Licencia()
        {
            e_categoria_licencia = new E_Categoria_Licencia();
        }
    }
}
