import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
              'Authorization': `Bearer ${this.authService.getUserToken()}`
            }
          });
        return next.handle(req)
        .pipe(
            tap (event => {
                if (event instanceof HttpResponse) {
                    // Do something
                }
            })
        );
    }
}
