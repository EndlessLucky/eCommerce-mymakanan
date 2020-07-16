import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';
import {ResponsiveModule} from "ngx-responsive";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ResponsiveModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    SocialLoginModule,
    HttpClientModule,
    LocalStorageModule.forRoot({
      prefix: environment.localStorage.prefix,
      storageType: 'localStorage'
    })
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.googleOAuthClientId
            ),
          }
          // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider(
          //     environment.fbOAuthClientId
          //   ),
          // }
        ],
      } as SocialAuthServiceConfig,
    },
    {provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
