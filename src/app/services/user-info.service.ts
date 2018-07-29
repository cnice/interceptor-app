import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class UserInfoService {

    private getAuthTokenUrl = environment.WebApiUrl + '/values/Login';
    private payload: any;

    constructor(private httpClient: HttpClient) { }

}
