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
    public class ME_Conductor : E_Transaccion
    {
        [DataMember] public E_Conductor                 e_conductor             { get; set; }
        [DataMember] public E_Proyecto                  e_proyecto              { get; set; }
        [DataMember] public E_Tipo_Doc_Identidad        e_tipo_doc_identidad    { get; set; }
        [DataMember] public E_Empresa_Trans             e_empresa_trans         { get; set; }
        [DataMember] public E_Clase_Licencia            e_clase_licencia        { get; set; }
        [DataMember] public E_Categoria_Licencia        e_categoria_licencia    { get; set; }
        [DataMember] public E_Tipo_Servicio             e_tipo_servicio         { get; set; }
        [DataMember] public E_Grupo_Sanguineo           e_grupo_sanguineo       { get; set; }

        public ME_Conductor()
        {
            e_conductor                 = new E_Conductor();
            e_proyecto                  = new E_Proyecto();
            e_tipo_doc_identidad        = new E_Tipo_Doc_Identidad();
            e_empresa_trans             = new E_Empresa_Trans();
            e_clase_licencia            = new E_Clase_Licencia();
            e_categoria_licencia        = new E_Categoria_Licencia();
            e_tipo_servicio             = new E_Tipo_Servicio();
            e_grupo_sanguineo           = new E_Grupo_Sanguineo();
        }
    }
}
