import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { SearchOrderPage } from '../search-order/search-order';

/**
 * Generated class for the OrderMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-main',
  templateUrl: 'order-main.html',
})
export class OrderMainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController, public menuCtrl: MenuController) {
  }


  SearchPage() {

    this.menuCtrl.enable(false, 'NoLoginDefault');
    this.menuCtrl.enable(false, 'LoginDefault');
    this.menuCtrl.enable(true, 'OrderInputDefault');

    // let alert = this.alerCtrl.create({
    //   title: 'Can Not Found Data',
    //   message: 'System Can Not Found Data ,Please Check Network And Try Again Or Contact System Administrator !',
    //   buttons: ['Ok']
    // });
    // alert.present()
  }

  popSearchOrderPage() {
    this.navCtrl.push(SearchOrderPage);
  }
}
