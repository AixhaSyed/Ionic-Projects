import { Component  } from '@angular/core';
import { Platform, Nav  } from 'ionic-angular';
import { StatusBar, Splashscreen  } from 'ionic-native';

// import { TabsPage } from '../pages/tabs/tabs';
import {HomePage} from '../pages/home/home';
import { AboutPage } from './../pages/about/about';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  // @ViewChild('myNav') nav
  nav ;

  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  }
//    ngAfterViewInit() {
//     // Let's navigate from TabsPage to Page1
//     this.nav.push(AboutPage);
//   }
// }
