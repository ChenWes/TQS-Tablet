import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StyleCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-style-check',
  templateUrl: 'style-check.html',
})
export class StyleCheckPage {

  styleCheck = {
    qa: 'qa',
    checkTime: 1,
    checkStatus: 'Pass',
    checkStatusDesc: '通过'
  }

  defaultSelectTab = 'material';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StyleCheckPage');
  }

}
