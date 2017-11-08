import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the SearchOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-order',
  templateUrl: 'search-order.html',
})
export class SearchOrderPage {

  //search order model default value
  searchOrderModel = {
    cardCode: '',
    orderCode: ''
  };

  //order list model
  orders: Array<{
    orderCode: string,
    customerName: string,
    sampleTypeDesc: string,
    washingTypeDesc: string,
    zaCode: string,
    styleNo: string,
    cheGroup: string,
    statusDesc: string,
    orderCount: number,
    currentProcess: string
  }>;

  constructor(private view: ViewController) {
  }

  ionViewDidLoad() {
  }

  ionViewWillLoad() {
    // const data = this.navParams.get('name');
    // console.log(data);
  }

  noSelectOrderClosePage() {
    //send data
    const data = {
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

    //page back and send data
    this.view.dismiss(data);
  }

  selectOrderClosePage(event, data) {
    // console.log(data);
    //page back and send data
    this.view.dismiss(data);
  }

  searchOrderbyAPI(e) {

    console.log(e);
    // this.presentLoading();

    this.orders = [];
    for (let i = 1; i < 11; i++) {
      this.orders.push({
        orderCode: 'S17GS0500' + i,
        customerName: 'PYE',
        sampleTypeDesc: 'Sample',
        washingTypeDesc: '不洗水',
        zaCode: 'i-' + i,
        styleNo: 'S16225LI60',
        cheGroup: '组别01',
        statusDesc: '待QA',
        orderCount: i,
        currentProcess: '洗水后'
      });
    }
  }
}
