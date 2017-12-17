import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import {ActionSheet } from 'ionic-angular'
import {ActionSheetController , Platform} from 'ionic-angular';
// import {NgFor} from '@angular/core';
import {Camera} from 'ionic-native';

import { AddService , CategoriesService } from './../Services/app.service'

import { AboutPage  } from '../../pages/about/about';
import {HomePage} from '../../pages/home/home';

@Component({
  selector: 'page-add-post',
  
  templateUrl: 'add-post.html'
})
export class AddPostPage {

 image = "";
  categories = null;
  featured = null;

  constructor(public navCtrl: NavController,
   public nav : NavController, 
   public navParams: NavParams ,
     public _AdService : AddService, 
    public _CategoriesService : CategoriesService,
    public actionsheetCtrl:ActionSheetController , 
    public platform: Platform ){
      
      
        this.categories = _CategoriesService.getCategories();
    }
    captureImage(){
    
    let imageFromCamera = false;
    
    let actionSheet = this.actionsheetCtrl.create({
    title: 'Select Method',
    buttons: [
      {
        text: 'Camera',
        handler: () => {
          console.log('Camera clicked');
          imageFromCamera = true;
          getImage();
        }
      },
      {
        text: 'Gallery',
        handler: () => {
          console.log('Gallery clicked');
          imageFromCamera = false;
          getImage();
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });

  // this.nav.present(actionSheet);
  actionSheet.present();
    
  let getImage = () => {
      
        let options = {
            destinationType : 0,
            sourceType : (imageFromCamera ? 1 : 0)
        };
        Camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:

            let base64Image = "data:image/jpeg;base64," + imageData;

            this.image = base64Image;

        }, (err) => {
            console.log(err);
            alert(err);
        });
  }

    
  }

  createAd(Title, Description, Price, Category){
      Title = Title.value
      Description = Description.value;
      Price = Price.value;
      Category = Category.text;
      
      let Featured = this.featured;
      let MainImage = this.image;
      
      this._AdService.createAdInService(Title, Description, Price, MainImage, Category, Featured);
      
      this.navCtrl.push(HomePage);
      
  }
  
 goBack() {
    this.navCtrl.pop();
  }
}