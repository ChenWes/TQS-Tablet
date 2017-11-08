import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuController } from 'ionic-angular';

// import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OrderMainPage } from '../pages/order-main/order-main';
import { LoginPage } from '../pages/login/login';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { UserAcountManagePage } from '../pages/user-acount-manage/user-acount-manage';
import { StyleCheckPage } from '../pages/style-check/style-check';


export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class TQSApp {
  @ViewChild(Nav) nav: Nav;

  //account data for display
  currentUserDetail: any;

  rootPage: any = HomePage;

  pages: PageInterface[] = [
    { title: '样板检查输入', component: OrderMainPage, icon: 'ios-paper-outline' },
    { title: '不合格样板查询', component: ListPage, icon: 'ios-book-outline' }
  ];// Array<{ title: string, component: any, icon: string }>;

  subPages: PageInterface[] = [
    { title: '对款检查输入', component: StyleCheckPage, icon: 'list' },
    { title: '手工检查输入', component: OrderMainPage, icon: 'list' },
    { title: '尺寸检查输入', component: ListPage, icon: 'list' },
    { title: 'Fitting检查输入', component: OrderMainPage, icon: 'list' },
    { title: '烫折检查输入', component: ListPage, icon: 'list' },
    { title: '外观检查输入', component: OrderMainPage, icon: 'list' }
  ]; //Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl: MenuController) {
    this.initializeApp();

    //check user data
    const loginUserData = JSON.parse(localStorage.getItem('userAccountData'));
    if (loginUserData) {
      if (loginUserData.data) {
        this.currentUserDetail = loginUserData.data;
        console.log(this.currentUserDetail);
      }
    }
    if (loginUserData) {
      this.menuCtrl.enable(false, 'NoLoginDefault');
      this.menuCtrl.enable(true, 'LoginDefault');
      this.menuCtrl.enable(false, 'OrderInputDefault');
    } else {
      this.menuCtrl.enable(true, 'NoLoginDefault');
      this.menuCtrl.enable(false, 'LoginDefault');
      this.menuCtrl.enable(false, 'OrderInputDefault');
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openLoginPage() {
    this.nav.setRoot(LoginPage);
  }

  openChangePasswordPage() {
    this.nav.setRoot(ChangePasswordPage);
  }

  openUserAcountManagePage() {
    this.nav.setRoot(UserAcountManagePage);
  }

  logout() {
    localStorage.removeItem('userAccountData');
    this.nav.setRoot(TQSApp);
  }

  backupMainModule() {
    this.nav.setRoot(TQSApp);
  }
}
