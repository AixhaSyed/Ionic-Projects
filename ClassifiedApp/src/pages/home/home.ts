import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


//PAGES
// import {AdAddPage}  from './pages/ad_add/ad_add' ;
import {AdAddPage} from './../ad-add/ad-add';
import {SearchPage}  from './../search/search';
import {AdsPage}  from './../ads/ads';

//Services 
import {AdService, CategoriesService, AdItem} from '../../services/app.services';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // constructor(public navCtrl: NavController) {

  // }
  //Pages
  _AdAddPage = AdAddPage;
  _SearchPage = SearchPage;
  
  category = false;
  categories: string[];
  
  ads : Array<AdItem>;
  
  constructor(
      public nav : NavController, 
      public _AdService : AdService,
      public _CategoriesService : CategoriesService ,
     
  )
  
       {
      
      this.categories = this._CategoriesService.getCategories();
      this.ads = this._AdService.getFeaturedAdsLimited(3);
  }
  
  categoryToggle(){
      console.log(this.category)
      this.category = this.category ? false : true;
  }
  
  gotoPage(page){
      this.nav.push(page);
  }
  gotoPage2(_HomePage){
      this.nav.push(_HomePage)
  }
  
  
  gotoAdsPage(category){
      console.log(category);
      this.nav.push(AdsPage, { Category : category });
  }
 

}