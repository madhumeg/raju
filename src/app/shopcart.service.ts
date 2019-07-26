import { Injectable } from '@angular/core';
import { Samsungproduct } from './samsungproduct';


@Injectable({
  providedIn: 'root'
})
export class ShopcartService {
  private mobiles:Samsungproduct[]=[];
 private price:any=[];
  constructor() { }
  addmobile(rec){
    this.mobiles.push(rec);
   
   
  }
  getmobile(){
    return this.mobiles;
  }
  addprice(re){
    this.price.push(re);
   
   
  }
  getprice(){
    return this.price;
  }

}
