import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedOrder: any;
  constructor(public navCtrl: NavController,  public navParams: NavParams ) {
    this.selectedOrder = navParams.get('order');
  }
}
