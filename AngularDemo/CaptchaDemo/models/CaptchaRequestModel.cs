using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CaptchaDemo.models
{
    public class CaptchaRequestModel
    {
        public string CaptchaId { get; set; }
        public string UserEnteredCaptchaCode { get; set; }
    }
}
