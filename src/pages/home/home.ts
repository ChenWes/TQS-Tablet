import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {

  }

  SearchPage() {
    let alert = this.alerCtrl.create({
      title: 'Can Not Found Data',
      message: 'System Can Not Found Data ,Please Check Network And Try Again Or Contact System Administrator !',
      buttons: ['Ok']
    });
    alert.present()
  }

}
