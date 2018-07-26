import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

    private getValidateAccessUrl = environment.WebApiUrl + '/values';
    private payload: any;

    constructor(private httpClient: HttpClient) {}

    login(user: string, password: string): boolean {
        let success = false;

        this.httpClient.get(this.getValidateAccessUrl).toPromise().then(result => {
            this.payload = result;
            localStorage.setItem('token', this.payload.title);
            success = true;
        });

        return success;
        // return this.httpClient.get(this.getValidateAccessUrl).toPromise();
    }

    logout(): any {
        localStorage.clear();
    }

    getUser(): any {
        return localStorage.getItem('token');
    }

    isLoggedIn(): boolean {
        return this.getUser() !== null;
    }
}

export const AUTH_PROVIDERS: Array<any> = [
    { provide: AuthService, userClass: AuthService }
];
