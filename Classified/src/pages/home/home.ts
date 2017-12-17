import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddPostPage} from './../add-post/add-post';

// import { AboutPage }  from './../about/about';

import {AddsPage} from '../../pages/adds/adds'

import { AddService , CategoriesService , AdItem } from './../Services/app.service'

// import { AddItem } from './../Services/app.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

_AdsPostPage = AddPostPage;



category = false;
  categories: string[];
  
  ads : Array<AdItem>;
//   Title = "phone "
 
  
  

  constructor(public navCtrl: NavController,
  public nav : NavController ,
  public _AdService : AddService,
      public _CategoriesService : CategoriesService ) {
        
  
   this.categories = this._CategoriesService.getCategories();
      this.ads = this._AdService.getFeaturedAdsLimited(2);
  }
  
  categoryToggle(){
      console.log(this.category)
      this.category = this.category ? false : true;
  }
  
  goToOtherPage() { this.navCtrl.push(AddPostPage);
  }
  goToOtherPage2(){
      this.navCtrl.push(AddsPage);
  }
  
  gotoAdsPage(category){
      console.log(category);
      this.nav.push(AddsPage, { Category : category });
  }

}
