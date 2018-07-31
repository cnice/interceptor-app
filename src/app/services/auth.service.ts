import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

    private getWelcomeMsgUrl = environment.WebApiUrl + '/values';
    private getAuthTokenUrl = environment.WebApiUrl + '/values/Login';
    private getUserContactInfoUrl = environment.WebApiUrl + '/values/GetUserContactInfo';
    private payload: any;

    constructor(private httpClient: HttpClient) {}

    login(loginModel: LoginModel): boolean {
        this.httpClient.post(this.getAuthTokenUrl, loginModel).toPromise().then(result => {
            this.payload = result;
            localStorage.setItem('user', this.payload.user.name);
            localStorage.setItem('token', this.payload.user.token);
        });
        return true;
    }

    logout(): any {
        localStorage.clear();
        this.payload = undefined;
    }

    getUser(): any {
        return localStorage.getItem('user');
    }

    getUserToken(): any {
        return localStorage.getItem('token');
    }

    isLoggedIn(): boolean {
        return this.getUser() !== null;
    }

    getUserContactInfo(): Promise<any> {
       return this.httpClient.get(this.getUserContactInfoUrl).toPromise().then(result => result);
    }

    getWelcomeMessage(): Promise<any> {
        return this.httpClient.get(this.getWelcomeMsgUrl, { responseType: 'text' }).toPromise().then(result => result);
    }
}

export const AUTH_PROVIDERS: Array<any> = [
    { provide: AuthService, userClass: AuthService }
];

export class LoginModel {
    UserName: string;
    Password: string;
}
