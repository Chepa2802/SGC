using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Entidad.Sistema;

namespace SGC.Areas.Sistema.Models
{
    public class SesionModelo : E_Transaccion
    {
        public const string SessionName = "SesionModelo";

        public int?     nu_id_proyecto              { get; set; }
        public string   vc_desc_proyecto            { get; set; }
        public string   vc_usuario                  { get; set; }
        public string   vc_contraseña               { get; set; }
        public decimal? nu_id_usuario               { get; set; }

        public string   vc_master                   { get; set; }
        public string   vc_error_vista              { get; set; }
        public string   vc_find_gene                { get; set; }
        public string   vc_nombre_imagen            { get; set; }
    }
}