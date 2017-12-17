import { Component } from '@angular/core';

import { NavController, ModalController, Icon } from 'ionic-angular';

import { AddItemPage } from '../add-item/add-item'

import { ItemDetailPage } from '../item-detail/item-detail';

import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  // providers: [Storage, Data ]
})
export class HomePage {
  
  public items = [];
 arr : any[];
 length : number;
   

  constructor(public navCtrl: NavController,  public modalCtrl: ModalController , public dataService: Data) {
    // this.arr = [];
 this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = JSON.parse(todos); 
      }
 
    });
   
  }
  
  ionViewDidLoad(){
 
    this.items = [
      {title: 'hi1', description: 'test1'},
      {title: 'hi2', description: 'test2'},
      {title: 'hi3', description: 'test3'}
    ];
 
  }
 
  addItem(item){
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
    addModal.present();
 
  }
  
  saveItem(item){
    this.items.push(item);
  }
 
  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
    item: item
  });
  
  }
  deleteItem(item){
 
    for(var i = 0; i < this.items.length; i++) {
 
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
  }}
}


 
  
 


