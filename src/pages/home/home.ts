import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController, Modal } from 'ionic-angular';

import { ChangeLanguagePage } from '../change-language/change-language';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentLanguage: string;
  currentLanguageLocalStorageItem: string = 'languageSetting';

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
    //get currentLanguage
    this.currentLanguage = localStorage.getItem(this.currentLanguageLocalStorageItem);
    if (!this.currentLanguage) {
      this.currentLanguage = 'cn';
    }
  }

  ionViewDidLoad() {
  }

  openChangeLanguage() {
    const searchOrderModal: Modal = this.modal.create(ChangeLanguagePage, { currentLanguage: this.currentLanguage }, { enableBackdropDismiss: false });

    searchOrderModal.present();

    //get parameter callback
    searchOrderModal.onDidDismiss((language) => {
      this.currentLanguage = language;
      localStorage.setItem(this.currentLanguageLocalStorageItem, this.currentLanguage);
      console.log('change language to----------------------');
      console.log(language);
    });
  }
}
