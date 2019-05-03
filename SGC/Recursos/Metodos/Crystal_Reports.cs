using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using CrystalDecisions.CrystalReports.Engine;
using CrystalDecisions.Shared;

namespace SGC.Recursos.Metodos
{
    public class Crystal_Reports
    {
        public static void RefrescarConexion(ReportDocument rep)
        {
            ConnectionInfo InfoConexion = new ConnectionInfo();
            InfoConexion.ServerName     = ConfigurationManager.AppSettings["ServidorRpt"];
            InfoConexion.DatabaseName   = ConfigurationManager.AppSettings["DbaseRpt"];
            InfoConexion.UserID         = ConfigurationManager.AppSettings["UsuarioRpt"];
            InfoConexion.Password       = ConfigurationManager.AppSettings["ClaveRpt"];

            TableLogOnInfo tableLogOnInfo = new TableLogOnInfo();
            tableLogOnInfo.ConnectionInfo = InfoConexion;

            foreach (Table table in rep.Database.Tables)
            {
                table.ApplyLogOnInfo(tableLogOnInfo);
                //table.LogOnInfo.ConnectionInfo.ServerName = InfoConexion.ServerName;
                //table.LogOnInfo.ConnectionInfo.DatabaseName = InfoConexion.DatabaseName;
                //table.LogOnInfo.ConnectionInfo.UserID = InfoConexion.UserID;
                //table.LogOnInfo.ConnectionInfo.Password = InfoConexion.Password;
                //table.Location = "dbo." + table.Location;
            }
        }
    }
}