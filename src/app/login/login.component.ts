import { Component } from '@angular/core';
import { AuthService, LoginModel } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
   message: string;
   loginModel: LoginModel;

   constructor(public authService: AuthService) {
       this.message = '';
   }
   login(username: string, password: string): boolean {
       this.message = '';

       this.loginModel = new LoginModel();
       this.loginModel.UserName = username;
       this.loginModel.Password = password;

       if (!this.authService.login(this.loginModel)) {
           this.message = 'Incorrect credentials.';
       }
       return false;
   }
   logout(): boolean {
       this.authService.logout();
       return false;
   }
}
