using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SGC.Areas.Sistema.Models;
using Siscom.WebLib.MvcShared;

namespace SGC.Areas.Sistema.Controllers.Base
{
    public class ControladorBase : Controller
    {
        public SesionModelo Ssn
        {
            get
            {
                if (Session[SesionModelo.SessionName] == null)
                    Session[SesionModelo.SessionName] = new SesionModelo();
                return (SesionModelo)Session[SesionModelo.SessionName];
            }
            set
            {
                Session[SesionModelo.SessionName] = value;
            }
        }

        private ICacheProvider _cacheProvider = null;

        public ICacheProvider cacheProvider
        {
            get { return _cacheProvider ?? (_cacheProvider = new CacheProvider()); }
            set { _cacheProvider = value; }
        }
    }
}