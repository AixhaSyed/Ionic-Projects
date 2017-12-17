import { Component } from '@angular/core';
// import { AddService } from '../../Services/Add.service';
import { AddItemService } from '../../Services/AddItem.service';
// import { CategoriesService } from '../../Services/Catagories.service';
import {CategoriesService} from '../../Services/Catagories.service'
import  { PostAddPage } from '../../pages/post-add/post-add'
import {AddsPage} from '../../pages/adds/adds'
import {AddService} from '../../Services/Add.service'
import {WishListPage} from '../../pages/wish-list/wish-list'



import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 _PostAddPage = PostAddPage;

ads : Array<AddService>;
ad : any;

  category = false;
  categories: string[];
    Adds : string ;
  
  
  constructor(public navCtrl: NavController,
      public nav : NavController,
      public _AddService : AddService,
      public _CategoriesService : CategoriesService,
      public _AddItemService : AddItemService
     ) {
      this.categories = this._CategoriesService.getCategories();
      this.ads = this._AddItemService.getFeaturedAdsLimited(7);
      // this.ad = new EventEmitter();
      
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
  gotoPostAddPage (cat){
      this.nav.push(AddsPage, { Category : cat});
 
 }
 gotoPage3(page){
   this.nav.push(page)
 }
 addToCart(ad) {
    this.nav.push(WishListPage)
  }
  
   deleteItem(ad){
 
    for(var i = 0; i < this.ads.length; i++) {
 
      if(this.ads[i] == ad){
        this.ads.splice(i, 1);
      }
  }}
  

  
//     for(var i = 0; i < this.ads.length; i++) {
 
//       if(this.ads[i] == ad){
//         this.ads.splice(i, 1);
//       }
//   }}

}
