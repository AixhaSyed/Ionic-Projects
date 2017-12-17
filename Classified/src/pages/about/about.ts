import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

// import { ContactPage } from '../../pages/contact/contact';

import { AddPostPage} from '../../pages/add-post/add-post'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

goToOtherPage() { this.navCtrl.push(AddPostPage);
  }
}
