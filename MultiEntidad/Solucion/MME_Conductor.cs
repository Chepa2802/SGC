using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using MacroEntidad;

namespace MultiEntidad.Solucion
{
    [Serializable]
    [DataContract]
    public class MME_Conductor : MME_Transaccion
    {
        public ME_Conductor         me_conductor    { get; set; }
        public List<ME_Conductor>   ls_me_conductor { get; set; }
        public List<ME_Conductor>   ls_me_exito     { get; set; }
        public List<ME_Conductor>   ls_me_errores   { get; set; }
        

        public MME_Conductor()
        {
            me_conductor    = new ME_Conductor();
            ls_me_conductor = new List<ME_Conductor>();
            ls_me_exito     = new List<ME_Conductor>();
            ls_me_errores   = new List<ME_Conductor>();
        }
    }
}
