import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AdAddPage} from '.././pages/ad-add/ad-add';
import {SearchPage}  from '.././pages/search/search';
import {AdsPage}  from '.././pages/ads/ads';
import {AdService, CategoriesService, AdItem} from './../services/app.services';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AdAddPage,
    SearchPage,
    AdsPage
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
    AdAddPage,
    SearchPage,
    AdsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler} ,
   AdService, CategoriesService, AdItem]
  // providers : [AdService, CategoriesService, AdItem]
})
export class AppModule {}
