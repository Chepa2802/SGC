using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Practices.EnterpriseLibrary.Data;

namespace Conexiones.SQLServer
{
    public abstract class SqlCn
    {
        protected static Database db = null;

        protected SqlCn()
        {
            DatabaseFactory.ClearDatabaseProviderFactory();
            DatabaseFactory.SetDatabaseProviderFactory(new DatabaseProviderFactory());
            db = DatabaseFactory.CreateDatabase();
        }

        protected SqlCn(string cadena)
        {
            DatabaseFactory.ClearDatabaseProviderFactory();
            DatabaseFactory.SetDatabaseProviderFactory(new DatabaseProviderFactory());
            db = DatabaseFactory.CreateDatabase(cadena);
        }
    }
}
