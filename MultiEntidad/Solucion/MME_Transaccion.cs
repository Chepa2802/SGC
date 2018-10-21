using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using Entidad.Sistema;

namespace MultiEntidad.Solucion
{
    [Serializable]
    [DataContract]
    public class MME_Transaccion
    {
        [DataMember]public E_Transaccion e_tran { get; set; }

        public MME_Transaccion()
        {
            e_tran = new E_Transaccion();
        }
    }
}
