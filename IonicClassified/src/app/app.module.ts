import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddService } from '../Services/Add.service';
import { AddItemService } from '../Services/AddItem.service';
// import { CategoriesService } from '../../Services/Catagories.service';
import {CategoriesService} from '../Services/Catagories.service'
import  { PostAddPage} from '../pages/post-add/post-add'
import {AddsPage} from '../pages/adds/adds'
import {AddsViewPage} from '../pages/adds-view/adds-view'
import {WishListPage} from '../pages/wish-list/wish-list'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddsPage,
    PostAddPage,
    WishListPage,
    AddsViewPage
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddsPage,
    PostAddPage,
    WishListPage,
    AddsViewPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
   AddService, CategoriesService, AddItemService]
})
export class AppModule {}
