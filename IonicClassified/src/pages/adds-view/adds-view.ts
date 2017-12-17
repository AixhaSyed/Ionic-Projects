import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AddsPage} from '../../pages/adds/adds'
import {CategoriesService} from '../../Services/Catagories.service'
import  { PostAddPage } from '../../pages/post-add/post-add'
// import {AddsPage} from '../../pages/adds/adds'
import {AddService} from '../../Services/Add.service'
import { AddItemService } from '../../Services/AddItem.service'


/*
  Generated class for the AddsView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adds-view',
  templateUrl: 'adds-view.html'
})
export class AddsViewPage {
  ads : Array<AddService>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
   public _AddService : AddService,
  public _AddItemService : AddItemService,
  public params: NavParams,
  public nav : NavController) {
    this.ads = navParams.get("ad");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddsViewPage');
  }

}
