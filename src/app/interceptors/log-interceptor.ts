import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { MessageService } from '../services/message.service';


@Injectable()
export class LogInterceptor implements HttpInterceptor {
    constructor(private messageService: MessageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        let msg: string;

        return next.handle(req)
        .pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    msg = 'Succeded';
                }
            }, (err: any) => {
                if ( err instanceof HttpErrorResponse) {
                    msg = 'Failed';
                }
            }),
            finalize( () => {
                const elapsed = Date.now() - started;
                this.messageService.add(`Request for ${req.urlWithParams} ${msg} took ${elapsed} ms.`);
            })
        );
    }
}
