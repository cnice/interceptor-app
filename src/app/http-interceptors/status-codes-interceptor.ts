import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class StatusCodesInterceptor implements HttpInterceptor {

    constructor(private router: Router) {

    }

  /**
   *
   *
   * @param {HttpRequest<any>} req
   * @param {HttpHandler} next
   * @returns
   * @memberof StatusCodesInterceptor
   */
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req)
        .pipe(
            tap(response => {
              if (response instanceof HttpResponse) {

              }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    switch (err.status) {
                        case 401:
                        case 403:
                            console.log(`Request for ${req.urlWithParams} failed. ${err.message}`);

                            this.router.navigate(['/no-access'], { queryParams: { message: err.message }, skipLocationChange: true });
                            break;
                        case 404:
                            console.log(`Request for ${req.urlWithParams} failed. ${err.message}`);

                            this.router.navigate(['/PageNotFound'], { queryParams: { message: err.message }, skipLocationChange: true});
                            break;
                    }
                }
            })
        );
    }
}
