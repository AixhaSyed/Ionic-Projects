import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddService } from '../../Services/Add.service'
import { AddItemService } from '../../Services/AddItem.service'
import { CategoriesService } from '../../Services/Catagories.service'
import {AddsViewPage } from '../../pages/adds-view/adds-view'

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
  
  ads : Array<AddService>;
  _AddsViewPage =   AddsViewPage

  constructor(public navCtrl: NavController, 
  public navParams: NavParams , 
  public _AddService : AddService,
  public _AddItemService : AddItemService,
  public _CategoriesService : CategoriesService,
  public params: NavParams,
  public nav : NavController) {

  
    if(Object.keys(params.data).length){
        this.ads = this._AddItemService.getFilteredAds(params.data);
    } else {
        this.ads = this._AddItemService.getAds();
    }
  }
  gotoPage3(_AddsViewPage){
    this.nav.push(_AddsViewPage);
    
  }
  deleteItem(ad){
 
    for(var i = 0; i < this.ads.length; i++) {
 
      if(this.ads[i] == ad){
        this.ads.splice(i, 1);
      }
  }}
}


