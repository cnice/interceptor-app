import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Add HttpClientModule for simplicity sake, required for interceptor feature.
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Interceptors
import { httpInterceptorProviders } from './http-interceptors/interceptors.index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  // Add Interceptor to providers at root app level.
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
