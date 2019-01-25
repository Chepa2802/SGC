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
        public static IFont Fuente(HSSFWorkbook Libro, string Letra, FontBoldWeight Bold, short Color, short Tamaño)
        {
            IFont Fuente = Libro.CreateFont();
            Fuente.FontName = Letra;
            Fuente.Boldweight = (short)Bold;
            Fuente.Color = Color;
            Fuente.FontHeightInPoints = Tamaño;

            return Fuente;
        }

        public static ICellStyle CssCelda(HSSFWorkbook Libro, IFont Fuente, HorizontalAlignment AlineacionH, VerticalAlignment AlineacionV, short Color)
        {
            ICellStyle Celda = Libro.CreateCellStyle();
            Celda.Alignment = AlineacionH;
            Celda.VerticalAlignment = AlineacionV;
            Celda.FillForegroundColor = Color;
            Celda.FillPattern = FillPattern.SolidForeground;
            Celda.BorderBottom = BorderStyle.Thin;
            Celda.BorderTop = BorderStyle.Thin;
            Celda.BorderLeft = BorderStyle.Thin;
            Celda.BorderRight = BorderStyle.Thin;

            Celda.SetFont(Fuente);
            
            return Celda;
        }

        public static ICell CeldaText(IRow Fila, Int32 NroCelda, ICellStyle CssCelda, string Dato)
        {
            ICell Celda;
            Celda = Fila.CreateCell(NroCelda);
            Celda.CellStyle = CssCelda;
            Celda.SetCellValue(Dato);
            return Celda;
        }

        public static ICell CeldaDouble(IRow Fila, Int32 NroCelda, ICellStyle CssCelda, decimal? Dato)
        {
            ICell Celda;
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

        public static ICell CeldaDateTime(IRow Fila, Int32 NroCelda, ICellStyle CssCelda, DateTime? Dato)
        {
            ICell Celda;
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

        public static ICell CeldaDate(IRow Fila, Int32 NroCelda, ICellStyle CssCelda, DateTime? Dato)
        {
            ICell Celda;
            Celda = Fila.CreateCell(NroCelda);
            Celda.CellStyle = CssCelda;

            if (Dato == null)
            {
                Celda.SetCellValue("");
            }
            else
            {
                Celda.SetCellValue(Dato.Value.ToString("dd/MM/yyyy"));
            }
            return Celda;
        }

        internal static IFont Fuente_Iworkbook(IWorkbook Libro, string Letra, FontBoldWeight Bold, short Color, short Tamaño)
        {
            IFont Fuente = Libro.CreateFont();
            Fuente.FontName = Letra;
            Fuente.Boldweight = (short)Bold;
            Fuente.Color = Color;
            Fuente.FontHeightInPoints = Tamaño;
            return Fuente;
        }

        internal static ICellStyle CssCelda_Iworkbook(IWorkbook Libro, IFont Fuente, HorizontalAlignment AlineacionH, VerticalAlignment AlineacionV, short Color)
        {
            ICellStyle Celda = Libro.CreateCellStyle();
            Celda.Alignment = AlineacionH;
            Celda.VerticalAlignment = AlineacionV;
            Celda.FillForegroundColor = Color;
            Celda.FillPattern = FillPattern.SolidForeground;
            Celda.BorderBottom = BorderStyle.Thin;
            Celda.BorderTop = BorderStyle.Thin;
            Celda.BorderLeft = BorderStyle.Thin;
            Celda.BorderRight = BorderStyle.Thin;

            Celda.SetFont(Fuente);

            return Celda;
        }
    }
}