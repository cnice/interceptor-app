import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Add HttpClientModule for simplicity sake, required for interceptor feature.
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Interceptors
import { httpInterceptorProviders } from './http-interceptors/interceptors.index';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';

// App Routing
import { AppRoutingModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  // Add Interceptor to providers at root app level.
  providers: [
    httpInterceptorProviders,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
