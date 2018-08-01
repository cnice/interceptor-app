import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor,
        HttpEvent,
        HttpHandler,
        HttpRequest,
        HttpErrorResponse,
        HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class StatusCodesInterceptor implements HttpInterceptor {

   constructor(private router: Router) {}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req)
        .pipe(
            tap(event => {
              if (event instanceof HttpResponse) {
                    // do stuff with response if you want
              }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    switch (err.status) {
                        case 401:
                        case 403:
                            this.router.navigate(['/no-access']);
                            break;
                        case 404:
                            this.router.navigate(['/pagenotfound']);
                            break;
                        default:
                            this.router.navigate(['/pagenotfound']);
                            break;
                    }
                }
            })
        );
    }
}
