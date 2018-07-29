/* "Barrel" of Http Interceptors  */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StatusCodesInterceptor } from './status-codes-interceptor';
import { TokenInterceptor } from './token-interceptor';
import { LogInterceptor } from './log-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: StatusCodesInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true}
];

