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

  rootPage: any = HomePage;

  pages: PageInterface[] = [
    { title: '样板检查输入', component: OrderMainPage, icon: 'ios-paper-outline' },
    { title: '不合格样板查询', component: ListPage, icon: 'ios-book-outline' }
  ];// Array<{ title: string, component: any, icon: string }>;
  subPages: PageInterface[] = [
    { title: '对款检查输入', component: ListPage, icon: 'list' },
    { title: '手工检查输入', component: OrderMainPage, icon: 'list' },
    { title: '尺寸检查输入', component: ListPage, icon: 'list' },
    { title: 'Fitting检查输入', component: OrderMainPage, icon: 'list' },
    { title: '烫折检查输入', component: ListPage, icon: 'list' },
    { title: '外观检查输入', component: OrderMainPage, icon: 'list' }
  ]; //Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl: MenuController) {
    this.initializeApp();

    // default menu
    // this.pages = [
    //   { title: '样板检查输入', component: OrderMainPage, icon: 'document' },
    //   { title: '不合格样板查询', component: ListPage, icon: 'bookmark' }
    // ];

    //order main menu
    // this.subPages = [
    //   { title: '对款检查输入', component: ListPage, icon: '' },
    //   { title: '手工检查输入', component: OrderMainPage, icon: '' },
    //   { title: '尺寸检查输入', component: ListPage, icon: '' },
    //   { title: 'Fitting检查输入', component: OrderMainPage, icon: '' },
    //   { title: '烫折检查输入', component: ListPage, icon: '' },
    //   { title: '外观检查输入', component: OrderMainPage, icon: '' }
    // ];

    //check user login
    this.menuCtrl.enable(true, 'NoLoginDefault');
    this.menuCtrl.enable(false, 'LoginDefault');
    this.menuCtrl.enable(false, 'OrderInputDefault');
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

  backupMainModule() {

    this.nav.setRoot(HomePage);

    //check user login
    this.menuCtrl.enable(true, 'NoLoginDefault');
    this.menuCtrl.enable(false, 'LoginDefault');
    this.menuCtrl.enable(false, 'OrderInputDefault');
  }

  //menu color
  // isActive(page: PageInterface) {
  //   let childNav = this.nav.getActiveChildNavs()[0];

  //   // Tabs are a special case because they have their own navigation
  //   if (childNav) {
  //     if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
  //       return 'primary';
  //     }
  //     return;
  //   }

  //   if (this.nav.getActive() && this.nav.getActive().name === page.name) {
  //     return 'primary';
  //   }
  //   return;
  // }
}
