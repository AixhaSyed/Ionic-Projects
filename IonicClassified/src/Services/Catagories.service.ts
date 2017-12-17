import {Injectable} from '@angular/core' ;


@Injectable()

// export class AddService {
//     _id : string;
//     Title : string;
//     Description : string;
//     Price : string;    
//     MainImage : string;
//     Category : string;
//     Featured : boolean;
// }

export class CategoriesService{
    
    categories = [
        "Cars",
        "Laptops",
        "Phones",
        "Home Appliances",
        "Camera",
        "Furniture"
    ]
    
    getCategories(){
        return this.categories;
    }
}