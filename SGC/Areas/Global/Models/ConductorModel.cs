using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MultiEntidad.Solucion;

namespace SGC.Areas.Global.Models
{
    public class ConductorModel
    {
        public MME_Conductor                    mme                     { get; set; }
        public List<MME_Conductor>              ls_mme                  { get; set; }
        public List<SelectListItem>             cb_empresa_transporte   { get; set; }

        public ConductorModel()
        {
            mme                         = new MME_Conductor();
            ls_mme                      = new List<MME_Conductor>();
            cb_empresa_transporte       = new List<SelectListItem>();
        }

    }
}