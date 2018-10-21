using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using MacroEntidad;

namespace MultiEntidad.Solucion
{
    [Serializable]
    [DataContract]
    public class MME_Categoria_Licencia : MME_Transaccion
    {
        [DataMember] public ME_Categoria_Licencia me_categoria_licencia { get; set; }

        public MME_Categoria_Licencia()
        {
            me_categoria_licencia = new ME_Categoria_Licencia();
        }
    }
}
