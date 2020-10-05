import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularCaptchaDemoComponent } from './captcha-demo/angular-captcha-demo/angular-captcha-demo.component';


const routes: Routes = [
  { path: 'captcha', component: AngularCaptchaDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
