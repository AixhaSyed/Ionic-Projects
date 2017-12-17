import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddService , CategoriesService , AdItem } from './../Services/app.service'

/*
  Generated class for the Adds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adds',
  templateUrl: 'adds.html'
})
export class AddsPage {
  
   
  
   ads : Array<AdItem>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams ,  public _AddService : AddService  ,
  public params: NavParams
  ) {
  
if(Object.keys(this.params.data).length){
        this.ads = this._AddService.getFilteredAds(this.params.data);
    } else {
        this.ads = this._AddService.getAds();
    }
    
    
    console.log(this.ads);
    console.log(this.params);
  }
}

