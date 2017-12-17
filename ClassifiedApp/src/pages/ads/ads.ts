import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AdService, AdItem} from './../../services/app.services';

/*
  Generated class for the Ads page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ads',
  templateUrl: 'ads.html'
})
export class AdsPage {

  // constructor(public navCtrl: NavController, public navParams: NavParams) {}

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AdsPage');
  // }

  ads : Array<AdItem>;
  
  constructor(public nav : NavController, public _AdService : AdService, public params: NavParams) {
    
    if(Object.keys(params.data).length){
        this.ads = this._AdService.getFilteredAds(params.data);
    } else {
        this.ads = this._AdService.getAds();
    }
    
    
    console.log(this.ads);
    console.log(params);
  }

}
