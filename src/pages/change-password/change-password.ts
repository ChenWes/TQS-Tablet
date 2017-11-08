import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { TQSApp } from '../../app/app.component';
import { LoginPage } from '../../pages/login/login';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  userData = {
    newpassword: '',
    confirmpassword: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public authServiceProvider: AuthServiceProvider, ) {
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

  changePassword() {
    if (this.userData.newpassword.trim() == '' || this.userData.confirmpassword.trim() == '') {
      this.showToast('密码不能为空');
    } else if (this.userData.newpassword.trim() != this.userData.confirmpassword.trim()) {
      this.showToast('两个密码不一致');
    } else {
      const loginUserData = JSON.parse(localStorage.getItem('userAccountData'));
      if (loginUserData) {
        this.authServiceProvider.putDataToApi('/user/' + loginUserData.data.id, loginUserData.data.token, { password: this.userData.newpassword }).then((result) => {
          this.showToast('修改成功！');
          this.navCtrl.setRoot(TQSApp);
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
      } else {
        this.showToast('请先登陆');
        this.navCtrl.setRoot(LoginPage);
      }
    }
  }
}
