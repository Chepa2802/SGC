using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MultiEntidad.Solucion;
using System.Web.Mvc;

namespace SGC.Areas.Sistema.Models
{
    public class UsuarioModel
    {
        public MME_Usuario              mme             { get; set; }
        public List<SelectListItem>     cb_proyecto     { get; set; }

        public UsuarioModel()
        {
            mme             = new MME_Usuario();
            cb_proyecto     = new List<SelectListItem>();
        }
    }
}