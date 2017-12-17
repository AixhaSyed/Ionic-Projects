import { NgModule, ErrorHandler  } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AddPostPage } from '../pages/add-post/add-post';
import {AddsPage} from '../pages/adds/adds'


import { AddService , CategoriesService } from './../pages/Services/app.service'


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddPostPage,
    AddsPage
    
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
    AddPostPage,
    AddsPage
  ],
  // providers: [{provide: ErrorHandler, useClass: IonicErrorHandler} , AddService, CategoriesService]
  providers : [AddService, CategoriesService]
})
export class AppModule {}
