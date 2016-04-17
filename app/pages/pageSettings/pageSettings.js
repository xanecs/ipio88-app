import {Page} from 'ionic-angular';
import {APIService} from '../../services/apiService';

@Page({
  templateUrl: 'build/pages/pageSettings/pageSettings.html',
  providers: [APIService]
})
export class PageSettings {
  static get parameters() {
    return [[APIService]];
  }
  constructor(api) {
    this.api = api;
    let settingsString = localStorage.getItem('apiSettings')
    this.apiSettings =  settingsString ? JSON.parse(settingsString) : {
      url: '',
      user: '',
      password: ''
    };
  }

  save() {
    localStorage.setItem('apiSettings', JSON.stringify(this.apiSettings));
    this.api.refreshSettings();
  }
}
