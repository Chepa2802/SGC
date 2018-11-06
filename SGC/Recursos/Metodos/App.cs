using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SGC.Recursos.Metodos
{
    public class App
    {
        public static object Exito(object trans)
        {
            return new { std = true, trans = trans };
        }

        public static object Error(String msg, object trans)
        {
            return new { std = false, msg = msg, trans = trans };
        }

        public static object Notificacion(String msg)
        {
            return new { std = false, msg = msg };
        }
    }
}