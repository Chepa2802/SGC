using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MultiEntidad.Solucion;

namespace SGC.Areas.Global.Models
{
    public class Empresa_TransModel
    {
        public MME_Empresa_Trans        mme         { get; set; }
        public List<MME_Empresa_Trans>  ls_mme      { get; set; }
        
        public Empresa_TransModel()
        {
            mme         = new MME_Empresa_Trans();
            ls_mme      = new List<MME_Empresa_Trans>();
        }
    }
}