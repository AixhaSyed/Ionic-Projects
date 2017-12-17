import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//Services 
import {CategoriesService} from './../../services/app.services';

//PAGES
import {AdsPage}  from './../ads/ads';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

categories = null; 
  // constructor(public navCtrl: NavController, public navParams: NavParams) {}

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SearchPage');
  // }
  constructor(public nav : NavController, public _CategoriesService : CategoriesService) {
      this.categories = _CategoriesService.getCategories();
  }
  
  
  gotoPage(page){
      this.nav.push(page);
  }
  
  searchAd(Title, Price, Category){
      Title = Title.value
      Price = Price.value;
      Category = Category.text;

      this.nav.push(AdsPage, { 
          Category : Category,
           Title : Title,
           Price : Price
        });      
  }

}
