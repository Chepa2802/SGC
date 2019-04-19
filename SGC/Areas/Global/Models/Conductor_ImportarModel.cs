using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MultiEntidad.Solucion;

namespace SGC.Areas.Global.Models
{
    public class Conductor_ImportarModel
    {
        public MME_Conductor                mme_conductor               { get; set; }
        public MME_Tipo_Doc_Identidad       mme_tipo_doc_identidad      { get; set; }
        public MME_Empresa_Trans            mme_empresa_trans           { get; set; }
        public MME_Clase_Licencia           mme_clase_licencia          { get; set; }
        public MME_Categoria_Licencia       mme_categoria_licencia      { get; set; }
        public MME_Tipo_Servicio            mme_tipo_servicio           { get; set; }
        public MME_Grupo_Sanguineo          mme_grupo_sanguineo         { get; set; }

        public List<MME_Conductor>          ls_mme_conductor            { get; set; }
        public List<MME_Tipo_Doc_Identidad> ls_mme_tipo_doc_identidad   { get; set; }
        public List<MME_Empresa_Trans>      ls_mme_empresa_trans        { get; set; }
        public List<MME_Clase_Licencia>     ls_mme_clase_licencia       { get; set; }
        public List<MME_Categoria_Licencia> ls_mme_categoria_licencia   { get; set; }
        public List<MME_Tipo_Servicio>      ls_mme_tipo_servicio        { get; set; }
        public List<MME_Grupo_Sanguineo>    ls_mme_grupo_sanguineo      { get; set; }

        public Conductor_ImportarModel()
        {
            mme_conductor               = new MME_Conductor();
            mme_tipo_doc_identidad      = new MME_Tipo_Doc_Identidad();
            mme_empresa_trans           = new MME_Empresa_Trans();
            mme_clase_licencia          = new MME_Clase_Licencia();
            mme_categoria_licencia      = new MME_Categoria_Licencia();
            mme_tipo_servicio           = new MME_Tipo_Servicio();
            mme_grupo_sanguineo         = new MME_Grupo_Sanguineo();

            ls_mme_conductor            = new List<MME_Conductor>();
            ls_mme_tipo_doc_identidad   = new List<MME_Tipo_Doc_Identidad>();
            ls_mme_empresa_trans        = new List<MME_Empresa_Trans>();
            ls_mme_clase_licencia       = new List<MME_Clase_Licencia>();
            ls_mme_categoria_licencia   = new List<MME_Categoria_Licencia>();
            ls_mme_tipo_servicio        = new List<MME_Tipo_Servicio>();
            ls_mme_grupo_sanguineo      = new List<MME_Grupo_Sanguineo>();
        }
        
    }
}