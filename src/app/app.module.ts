import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Add HttpClientModule for simplicity sake, required for interceptor feature.
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Interceptors
import { httpInterceptorProviders } from './http-interceptors/interceptors.index';
import { AuthService } from './services/auth.service';

// App Routing
import { AppRoutingModule } from './app-router.module';

import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { HomeComponent } from './home/home.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProtectedComponent,
    NoAccessComponent,
    PageNotFoundComponent
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
