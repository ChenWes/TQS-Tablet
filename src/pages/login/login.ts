import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController, ToastController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TQSApp } from '../../app/app.component';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData: any;

  userData = { code: 'GET0280762', password: '123' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  }

  showToast(messageString: string) {
    const toast = this.toastCtrl.create({
      message: messageString,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 0,
      dismissOnPageChange: true
    }).present();
  }

  loginFunction() {
    if (this.userData.code == "" || this.userData.password == "") {
      this.showToast('用户或密码为空，请输入工号和密码后重试！');
    } else {
      // this.authServiceProvider.postDataToApi_withOutToken('/auth/get_token', this.userData).then((result) => {
      //   this.responseData = result;
      this.responseData = {
        data: {
          id: "5a01307f4cb5523aa4023275",
          department: "IT",
          userCode: "GET0280762",
          userName: "WesChen",
          actived: true,
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMDEzMDdmNGNiNTUyM2FhNDAyMzI3NSIsImRlcGFydG1lbnQiOiJJVCIsInVzZXJDb2RlIjoiR0VUMDI4MDc2MiIsInVzZXJOYW1lIjoiV2VzQ2hlbiIsImFjdGl2ZWQiOnRydWUsImlhdCI6MTUxMDAzNzkzM30.9OacwzKURl4lvWnl826pWxiytjJikrf7hoe61fcNyak"
        }
      };
      localStorage.setItem('userAccountData', JSON.stringify(this.responseData));
      this.navCtrl.setRoot(TQSApp);
      // }, (err) => {
      //   let errMessage = err.statusText;
      //   if (err._body) {
      //     let responseJson = JSON.parse(err._body)
      //     if (responseJson.resultMsg) {
      //       errMessage = responseJson.resultMsg;
      //     }
      //   }
      //   this.showToast(errMessage);
      // });
    }
  }

  signupFunction() {
    this.navCtrl.push(SignupPage);
  }

}
