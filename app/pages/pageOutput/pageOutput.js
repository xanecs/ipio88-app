import {Page} from 'ionic-angular';
import {APIService} from '../../services/apiService';

@Page({
  templateUrl: 'build/pages/pageOutput/pageOutput.html',
  providers: [APIService]
})
export class PageOutput {
  static get parameters() {
    return [[APIService]];
  }

  constructor(api) {
    this.api = api;
  }

  ngOnInit() {
    this.api.getOutputs().subscribe(
      data => this.outputs = data
    );
  }


  changed(event, id) {

  }
}
