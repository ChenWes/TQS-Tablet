import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController, LoadingController } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  userData = { department: '', code: '', name: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public authServiceProvider: AuthServiceProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 0,
      dismissOnPageChange: true
    }).present();
  }

  showToast(messageString: string) {
    const toast = this.toastCtrl.create({
      message: messageString,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  signupFunction() {
    if (this.userData.department == '' && this.userData.code == '' || this.userData.name == '' || this.userData.password == '') {
      this.showToast('数据不可为空，请输入后重试');
    } else {
      this.authServiceProvider.postDataToApi_withOutToken('/user', this.userData).then((result) => {
        this.navCtrl.pop();
      }, (err) => {
        let errMessage = err.statusText;
        if (err._body) {
          let responseJson = JSON.parse(err._body)
          if (responseJson.resultMsg) {
            errMessage = responseJson.resultMsg;
          }
        }
        this.showToast(errMessage);
      });
    }
  }
}
