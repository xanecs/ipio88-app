import {Page} from 'ionic-angular';
import {PageInput} from '../pageInput/pageInput';
import {PageOutput} from '../pageOutput/pageOutput';
import {PageTimer} from '../pageTimer/pageTimer';
import {PageSettings} from '../pageSettings/pageSettings';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    this.tabInputRoot = PageInput;
    this.tabOutputRoot = PageOutput;
    this.tabTimerRoot = PageTimer;
    this.tabSettingsRoot = PageSettings;
  }
}
