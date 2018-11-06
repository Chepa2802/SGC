using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NPOI.SS.UserModel;
using NPOI.HSSF.UserModel;

namespace SGC.Recursos.Metodos
{
    public class Excel
    {
        public static Font Fuente(HSSFWorkbook Libro, string Letra, FontBoldWeight Bold, short Color, short Tamaño)
        {
            Font Fuente = Libro.CreateFont();
            Fuente.FontName = Letra;
            Fuente.Boldweight = (short)Bold;
            Fuente.Color = Color;
            Fuente.FontHeightInPoints = Tamaño;

            return Fuente;
        }

        public static CellStyle CssCelda(HSSFWorkbook Libro, Font Fuente, HorizontalAlignment AlineacionH, VerticalAlignment AlineacionV, short Color)
        {
            CellStyle Celda = Libro.CreateCellStyle();
            Celda.Alignment = AlineacionH;
            Celda.VerticalAlignment = AlineacionV;
            Celda.FillForegroundColor = Color;
            Celda.FillPattern = FillPatternType.SOLID_FOREGROUND;
            Celda.BorderBottom = CellBorderType.THIN;
            Celda.BorderTop = CellBorderType.THIN;
            Celda.BorderLeft = CellBorderType.THIN;
            Celda.BorderRight = CellBorderType.THIN;

            Celda.SetFont(Fuente);

            return Celda;
        }

        public static Cell CeldaText(Row Fila, Int32 NroCelda, CellStyle CssCelda, string Dato)
        {
            Cell Celda;
            Celda = Fila.CreateCell(NroCelda);
            Celda.CellStyle = CssCelda;
            Celda.SetCellValue(Dato);
            return Celda;
        }

        public static Cell CeldaDouble(Row Fila, Int32 NroCelda, CellStyle CssCelda, decimal? Dato)
        {
            Cell Celda;
            Celda = Fila.CreateCell(NroCelda);
            Celda.CellStyle = CssCelda;

            if (Dato == null)
            {
                Celda.SetCellValue("");
            }
            else
            {
                Celda.SetCellValue(Double.Parse(Dato.ToString()));
            }
            return Celda;
        }

        public static Cell CeldaDateTime(Row Fila, Int32 NroCelda, CellStyle CssCelda, DateTime? Dato)
        {
            Cell Celda;
            Celda = Fila.CreateCell(NroCelda);
            Celda.CellStyle = CssCelda;

            if (Dato == null)
            {
                Celda.SetCellValue("");
            }
            else
            {
                Celda.SetCellValue(Dato.ToString());
            }
            return Celda;
        }
    }
}