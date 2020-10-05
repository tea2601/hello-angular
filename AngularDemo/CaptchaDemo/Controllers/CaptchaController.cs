using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BotDetect.Web;
using CaptchaDemo.models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CaptchaDemo.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CaptchaController : ControllerBase
    {
        [HttpGet]
        public JsonResult Get()
        {
            return new JsonResult("Hello captcha");
        }
        [HttpPost]
        public JsonResult Post([FromBody] CaptchaRequestModel value)
        {
            string userEnteredCaptchaCode = value.UserEnteredCaptchaCode;
            string captchaId = value.CaptchaId;

            // create a captcha instance to be used for the captcha validation
            SimpleCaptcha yourFirstCaptcha = new SimpleCaptcha();
            // execute the captcha validation
            bool isHuman = yourFirstCaptcha.Validate(userEnteredCaptchaCode, captchaId);

            if (isHuman == false)
            {
                // captcha validation failed; notify the frontend 
                // TODO: consider logging the attempt
                return new JsonResult(new { success = false });
            }
            else
            {
                return new JsonResult(new { success = true });
                // TODO: captcha validation succeeded; execute the protected action
                // TODO: do not forget to notify the frontend about the results
            }
        }
    }
}
