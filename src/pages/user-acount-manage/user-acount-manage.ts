import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

// import { LoginPage } from '../../pages/login/login';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the UserAcountManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-acount-manage',
  templateUrl: 'user-acount-manage.html',
})
export class UserAcountManagePage {

  userAcountList: Array<{ id: string, department: string, code: any, name: string, actived: boolean }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public authServiceProvider: AuthServiceProvider, ) {
    this.listAllUserList();
  }

  showToast(messageString: string) {
    const toast = this.toastCtrl.create({
      message: messageString,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  listAllUserList() {
    // const loginUserData = JSON.parse(localStorage.getItem('userAccountData'));
    // if (loginUserData) {
    //   this.authServiceProvider.getDataToApi('/user', loginUserData.data.token).then((result) => {
    //     const userlist = result;

    //     if (userlist.results) {
    //       this.userAcountList = [];

    //       this.userAcountList.push(
    //         userlist.results.map((user) => {
    //           console.log(user);
    //           return {
    //             id: user[0].id,
    //             department: user[0].department,
    //             code: user[0].code,
    //             name: user[0].name,
    //             actived: user[0].actived
    //           }
    //         }));
    //     }
    //   }, (err) => {
    //     let errMessage = err.statusText;
    //     if (err._body) {
    //       let responseJson = JSON.parse(err._body)
    //       if (responseJson.resultMsg) {
    //         errMessage = responseJson.resultMsg;
    //       }
    //     }
    //     this.showToast(errMessage);

    //   });
    // } else {
    //   this.showToast('请先登陆');
    //   this.navCtrl.setRoot(LoginPage);
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAcountManagePage');
  }

}
