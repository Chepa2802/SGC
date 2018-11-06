using System;
using System.Collections.Generic;
using System.Text;

namespace Conexiones.SQLServer
{
    public interface Base<T>
    {
        IList<T> List(T oItem);

        T Sel(T oItem);

        T Ins(T oItem);

        T Upd(T oItem);

        T Std(T oItem);
    }
}

