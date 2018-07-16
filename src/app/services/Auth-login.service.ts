import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthLoginService {

    private getValidateAccessUrl = environment.WebApiUrl + '/values';
    constructor(private httpClient: HttpClient) {

    }

    ValidateAccess(): Promise<any> {
        return this.httpClient.get(this.getValidateAccessUrl).toPromise();
    }
}
