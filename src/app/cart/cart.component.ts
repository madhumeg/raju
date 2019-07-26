import { Component, OnInit } from '@angular/core';
import { ShopcartService } from '../shopcart.service';
import { Samsungproduct } from '../samsungproduct';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public mobiledatas: Samsungproduct[];
  public totalPrice: number;
  intPrice:any;
  public pr:any;
  empcode:number;
  empname:string;
  number=1;
  getTotalPrice(){
   let totalcost: Array<number> = []
    this.mobiledatas.forEach((item, i) =>{
    this.intPrice = item.price
    totalcost.push(this.intPrice)
   
     debugger;
      console.log(this.intPrice);
   
    })
    this.totalPrice =totalcost.reduce((a, item) =>{ return a +=item}, 0);
   
  }
  
  delete(mobiledatas){
    this.mobiledatas.splice(mobiledatas,1);
    console.log("welcome");
  }
  increment(n1:number){
    
    this.number=n1++;
  }
  dicrement(){
    this.number--;
  }
  constructor(private shop:ShopcartService) { 
  
  }
 
 
 
  ngOnInit() {
    this.mobiledatas=this.shop.getmobile();
    this.getTotalPrice();
   
  }
 
  

  

}
