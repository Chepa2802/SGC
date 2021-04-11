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
        public MME_Empresa_Trans                mme_empresa_trans       { get; set; }
        public List<MME_Empresa_Trans>          ls_mme_empresa_trans    { get; set; }
        public List<SelectListItem>             cb_tipo_doc_identidad   { get; set; }
        public List<SelectListItem>             cb_grupo_sanguineo      { get; set; }
        public List<SelectListItem>             cb_clase_licencia       { get; set; }
        public List<SelectListItem>             cb_categoria_licencia   { get; set; }
        public List<SelectListItem>             cb_tipo_servicio        { get; set; }
        public List<SelectListItem>             cb_centro_medico        { get; set; }

        public ConductorModel()
        {
            mme                         = new MME_Conductor();
            ls_mme                      = new List<MME_Conductor>();
            cb_empresa_transporte       = new List<SelectListItem>();
            mme_empresa_trans           = new MME_Empresa_Trans();
            ls_mme_empresa_trans        = new List<MME_Empresa_Trans>();
            cb_tipo_doc_identidad       = new List<SelectListItem>();
            cb_grupo_sanguineo          = new List<SelectListItem>();
            cb_clase_licencia           = new List<SelectListItem>();
            cb_categoria_licencia       = new List<SelectListItem>();
            cb_tipo_servicio            = new List<SelectListItem>();
            cb_centro_medico            = new List<SelectListItem>();
        }

    }
}