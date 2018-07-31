import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Add HttpClientModule for simplicity sake, required for interceptor feature.
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Interceptors
import { httpInterceptorProviders } from './interceptors/interceptors.index';

// Services
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';

// App Routing
import { AppRoutingModule } from './app-router.module';

import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessageComponent } from './messages/message.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageComponent,
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
    AuthService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
