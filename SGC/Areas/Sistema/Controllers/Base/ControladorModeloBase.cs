using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Siscom.WebLib.Validator;

namespace SGC.Areas.Sistema.Controllers.Base
{
    [SesionExpira]
    public class ControladorModeloBase<T> : ControladorBase
    {
        private readonly IModelValidator<T> _modelValidator = null;

        protected ControladorModeloBase()
        {
        }

        protected ControladorModeloBase(IModelValidator<T> modelValidator)
        {
            _modelValidator = modelValidator;
        }
    }
}