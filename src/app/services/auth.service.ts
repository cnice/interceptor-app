import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

    private getAuthTokenUrl = environment.WebApiUrl + '/values/Login';
    private payload: any;

    constructor(private httpClient: HttpClient) {}

    login(loginModel: LoginModel): boolean {

        if (!this.payload) {
            this.httpClient.post(this.getAuthTokenUrl, loginModel).toPromise().then(result => {
                this.payload = result;
                localStorage.setItem('user', this.payload.user.name);
            });
          return true;
        }
    }

    logout(): any {
        localStorage.clear();
        this.payload = undefined;
    }

    getUser(): any {
        return localStorage.getItem('user');
    }

    isLoggedIn(): boolean {
        return this.getUser() !== null;
    }
}

export const AUTH_PROVIDERS: Array<any> = [
    { provide: AuthService, userClass: AuthService }
];

export class LoginModel {
    UserName: string;
    Password: string;
}
