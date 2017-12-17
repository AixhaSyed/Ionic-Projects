import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ActionSheetController , Platform} from 'ionic-angular';
import { AddItemService } from '../../Services/AddItem.service';
// import { CategoriesService } from '../../Services/Catagories.service';
import {CategoriesService} from '../../Services/Catagories.service'
// import  { PostAddPage} from '../../pages/post-add/post-add'
import {Camera} from 'ionic-native';
import {HomePage} from '../../pages/home/home'

/*
  Generated class for the PostAdd page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-add',
  templateUrl: 'post-add.html'
})
export class PostAddPage {

  image = "";
  categories = null;
  featured = null;

  constructor(
      public nav : NavController, 
    public _AddItemService : AddItemService, 
    public _CategoriesService : CategoriesService,
    public actionsheetCtrl:ActionSheetController ) {
        
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

  createAd(Title, Description, Price, Category, ContactNumber , PostedBy){
     
      Title = Title.value
      Description = Description.value;
      Price = Price.value;
      Category = Category.text;
      ContactNumber = ContactNumber.value;
      PostedBy = PostedBy.value ;
      let Featured = this.featured;
      let MainImage = this.image;
       
      
      this._AddItemService.createAdInService(Title, Description, Price, MainImage, Category, Featured , ContactNumber , PostedBy);
      
      this.nav.push(HomePage);
      
  }
  


}
