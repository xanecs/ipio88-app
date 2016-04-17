import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {PageSettings} from './pages/pageSettings/pageSettings';
import {APIService} from './services/apiService';

@App({
  template: `
  <ion-nav [root]="rootPage">
  </ion-nav>`,
  config: {}
})
export class IPIOApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    let apiSettings = localStorage.getItem('apiSettings');
    this.rootPage = apiSettings ? TabsPage : PageSettings;
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
