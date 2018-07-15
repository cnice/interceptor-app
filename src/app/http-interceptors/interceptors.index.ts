/* "Barrel" of Http Interceptors  */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StatusCodesInterceptor } from './status-codes-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: StatusCodesInterceptor, multi: true },
];

