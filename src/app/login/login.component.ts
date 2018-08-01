import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginModel } from '../models/login-model';

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

   login(username: string, password: string) {
       this.message = '';

       this.loginModel = new LoginModel();
       this.loginModel.UserName = username;
       this.loginModel.Password = password;

       this.authService.login(this.loginModel).then(() => {
        if ( !this.authService.isLoggedIn() ) {
            this.message = 'Incorrect credentials. Try again!';
        }
       });
   }
   logout(): boolean {
       this.authService.logout();
       return false;
   }
}
