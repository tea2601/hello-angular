import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CaptchaComponent } from 'angular-captcha';
import { CaptchaDemoService } from '../services/captcha-demo.service';

@Component({
  selector: 'app-angular-captcha-demo',
  templateUrl: './angular-captcha-demo.component.html'
})
export class AngularCaptchaDemoComponent implements OnInit {
  /**
   * Captcha validation messages.
   */
  errorMessages: string;
  successMessages: string;
  @ViewChild(CaptchaComponent, { static: true }) captchaComponent: CaptchaComponent;

  constructor(
    private router: Router,
    private captchaDemoService: CaptchaDemoService) {}

  ngOnInit(): void {
    // set the captchaEndpoint property to point to
    // the captcha endpoint path on your app's backend
    this.captchaComponent.captchaEndpoint = 'https://localhost:44351/simple-captcha-endpoint.ashx';
  }

  /**
   * Process the form on submit event.
   */
  validate(): void {

    // get the user-entered captcha code value to be validated at the backend side        
    let userEnteredCaptchaCode = this.captchaComponent.userEnteredCaptchaCode;
    
    // get the id of a captcha instance that the user tried to solve
    let captchaId = this.captchaComponent.captchaId;

    const postData = {
      // add the user-entered captcha code value to the post data    
      userEnteredCaptchaCode: userEnteredCaptchaCode,
      // add the id of a captcha instance to the post data      
      captchaId: captchaId
    };

    // post the captcha data to the backend
    this.captchaDemoService.send(postData)
      .subscribe(
        response => {
          console.log(response);
          if (response.success == false) {
            // captcha validation failed; show the error message
            this.errorMessages = 'CAPTCHA validation failed.';
            // call the this.captchaComponent.reloadImage()
            // in order to generate a new captcha challenge
            this.captchaComponent.reloadImage();
          } else {
            // captcha validation succeeded; proceed with the workflow
            this.successMessages = 'CAPTCHA validation successful.';
          }
        },
        error => {
          throw new Error(error);
        });
  }
}
