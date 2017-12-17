import {Injectable} from '@angular/core';
// import { AddService } from './../Services/Add.service'

export class AddService {
    _id : string;
    Title : string;
    Description : string;
    Price : string;    
     ContactNumber : number ;
    PostedBy : string; 
    MainImage : string;
    Category : string;
    Featured : boolean;
}

@Injectable()
export class AddItemService{
    
    ads : Array<AddService>;
    
    
    constructor(){
        
        let ads = localStorage.getItem('ads');
        if(ads){
            this.ads = JSON.parse(ads);
        } else {
            this.ads = [];
        }
        
    }
    
    createAdInService( Title, Description, Price, MainImage, Category, Featured , ContactNumber , PostedBy){
        let tmp : AddService = {
            _id : (Date.now()).toString(),
            Title : Title,
            Description : Description,
            Price : Price,
             ContactNumber : ContactNumber,
             PostedBy : PostedBy , 
            MainImage : MainImage,
            Category : Category,
            Featured : Featured
        }        
        this.ads.push(tmp);
        
        localStorage.setItem("ads", JSON.stringify(this.ads));
    }
    
    getAds(){
        return this.ads;
    }
    
    getFilteredAds(obj){
        var tmp = [];
        
        for(var i = 0; i < this.ads.length; i++){
            var flag = true;
            if(obj.Category && obj.Category != this.ads[i].Category){
                flag = false;
            }
            if(obj.Title && this.ads[i].Title.toLowerCase().indexOf(obj.Title.toLowerCase()) == -1){
                flag = false;
            }
            if(obj.Price && obj.Price != this.ads[i].Price){
                flag = false;
            }
            if(obj.Featured && !this.ads[i].Featured){
                flag = false;
            }
            
            if(flag){
                tmp.push(this.ads[i]);
            }            
        }
        
        return tmp;
    }
    
    getFeaturedAdsLimited(count){
        var tmp = [];
        
        let counter = 0;
        for(var i = 0; i < this.ads.length; i++){
            
            if(this.ads[i].Featured){                
                counter++;
                tmp.push(this.ads[i]);
                if(counter == count){
                    break;
                } 
            } 
  
            
        }
        
        return tmp;
    }
}