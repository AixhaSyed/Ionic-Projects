import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AboutPage } from '../../pages/about/About' ;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

aboutPage = AboutPage;


  constructor(public navCtrl: NavController) {
   
  }
  
}