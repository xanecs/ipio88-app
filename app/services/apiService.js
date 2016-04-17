import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {NavController, Alert} from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class APIService {
  static get parameters() {
    return [[Http], [NavController]];
  }
  constructor(http, nav) {
    this.http = http;
    this.nav = nav;
    this.refreshSettings();
  }

  refreshSettings() {
    this.apiSettings = JSON.parse(localStorage.getItem('apiSettings'));
  }

  getUrl(path) {
    return `http://${this.apiSettings.url}/api/${path}`
  }

  getInputs() {
    return this.http.get(this.getUrl('inputs'))
      .map(res => res.json())
      .catch(this.handleError);
  }

  getOutputs() {
    return this.http.get(this.getUrl('outputs'))
      .map(res => res.json())
      .catch(this.handleError);
  }

  setOutput(id, state) {
    return this.http.post(
      this.getUrl(`output/${id}`),
      JSON.stringify({state})
    )
    .map(res => res.json())
    .catch(this.handleError);
  }

  handleError(err) {
    let alert = Alert.create({
      title: 'Oh nein!',
      message: 'Ein Fehler ist aufgetreten: ' + (err.json().error || 'Server error'),
      buttons: ['Ok']
    });
    this.nav.present(alert);
  }
}
