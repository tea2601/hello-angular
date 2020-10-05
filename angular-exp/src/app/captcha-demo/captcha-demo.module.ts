import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularCaptchaDemoComponent } from './angular-captcha-demo/angular-captcha-demo.component';
import { BotDetectCaptchaModule } from 'angular-captcha';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AngularCaptchaDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    BotDetectCaptchaModule
  ]
})
export class CaptchaDemoModule { }
