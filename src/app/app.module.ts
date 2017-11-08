import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { HttpModule } from '@angular/http';

import { TQSApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SearchOrderPage } from '../pages/search-order/search-order';
import { OrderMainPage } from '../pages/order-main/order-main';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ChangeLanguagePage } from '../pages/change-language/change-language';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { StyleCheckPage } from '../pages/style-check/style-check';
import { UserAcountManagePage } from '../pages/user-acount-manage/user-acount-manage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    TQSApp,
    HomePage,
    ListPage,
    OrderMainPage,
    SearchOrderPage,
    LoginPage,
    SignupPage,
    ChangeLanguagePage,
    ChangePasswordPage,
    StyleCheckPage,
    UserAcountManagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(TQSApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TQSApp,
    HomePage,
    ListPage,
    OrderMainPage,
    SearchOrderPage,
    LoginPage,
    SignupPage,
    ChangeLanguagePage,
    ChangePasswordPage,
    StyleCheckPage,
    UserAcountManagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider
  ]
})
export class AppModule { }
