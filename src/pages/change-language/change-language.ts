import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ChangeLanguagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-language',
  templateUrl: 'change-language.html',
})
export class ChangeLanguagePage {

  currentLanguage: string;
  originalLanguage: string;

  langList = [{
    languageCode: 'cn',
    languageTitle: '中文',
    isCurrent: false
  },
  {
    languageCode: 'en',
    languageTitle: 'English',
    isCurrent: false
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
  }

  ionViewWillLoad() {
    const data = this.navParams.get('currentLanguage');
    this.originalLanguage = data;
    this.currentLanguage = data;
    this.langList.filter(item => item.languageCode == this.originalLanguage)[0].isCurrent = true;
  }

  cancelSetting() {
    this.viewCtrl.dismiss(this.originalLanguage);
  }

  applySetting() {
    this.viewCtrl.dismiss(this.currentLanguage);
  }

  setLanage(data) {
    this.currentLanguage = data;
  }
}
