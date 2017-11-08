import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Modal } from 'ionic-angular';

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

  currentOrder = {
    orderCode: '',
    customerName: '',
    sampleTypeDesc: '',
    washingTypeDesc: '',
    zaCode: '',
    styleNo: '',
    cheGroup: '',
    statusDesc: '',
    orderCount: '',
    currentProcess: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController, public menuCtrl: MenuController, private modal: ModalController) {
  }

  ionViewDidLoad() {
  }

  confirmOrder() {
    //change menu
    this.menuCtrl.enable(false, 'NoLoginDefault');
    this.menuCtrl.enable(false, 'LoginDefault');
    this.menuCtrl.enable(true, 'OrderInputDefault');
  }


  openReadCard() {

  }

  popSearchOrderPage() {
    const myModelData = {
      orderCode: '',
      customerName: '',
      sampleTypeDesc: '',
      washingTypeDesc: '',
      zaCode: '',
      styleNo: '',
      cheGroup: '',
      statusDesc: '',
      orderCount: 0,
      currentProcess: ''
    };

    //show modal
    const searchOrderModal: Modal = this.modal.create(SearchOrderPage, { name: myModelData }, { enableBackdropDismiss: false });
    searchOrderModal.present();

    //get parameter callback
    searchOrderModal.onDidDismiss((data) => {
      this.currentOrder = data;
      // console.log(data);
    });

    // searchOrderModal.onWillDismiss((data) => {
    //   console.log(data);
    // });
  }
}
