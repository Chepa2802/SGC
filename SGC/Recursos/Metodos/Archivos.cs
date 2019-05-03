using System;
using System.IO;

namespace SGC.Recursos.Metodos
{
    public class Archivos
    {
        public static void ExisteArchivo(string ruta, string nombre = "")
        {
            if (!new FileInfo(ruta).Exists)
            {
                throw new Exception("No existe el archivo: " + (nombre == "" ? ruta : nombre));
            }
        }

        public static void EliminarArchivo(string ruta)
        {
            if (new FileInfo(ruta).Exists)
            {
                File.Delete(ruta);
            }
        }
    }
}