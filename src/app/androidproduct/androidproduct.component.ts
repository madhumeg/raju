import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import { Androidprodut } from '../androidprodut';
import { Observable } from 'rxjs';
 import { ShopcartService } from '../shopcart.service';
 import { AndroiedService } from '../androied.service';
 import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-androidproduct',
  templateUrl: './androidproduct.component.html',
  styleUrls: ['./androidproduct.component.css'],
 
})
export class AndroidproductComponent implements OnInit {

   datas: Observable<Androidprodut>;
    
  constructor(private route:ActivatedRoute,
              private se:AndroiedService,
              ) 
              {}

              ngOnInit() {
                this.datas = this.route.paramMap.pipe(
                   switchMap((params:ParamMap)=>
                   this.se.get_samsungg(params.get('id')))
                  
                );
              };
  sendme(datas){
  

  }
    //senditem(datas:Samsungproduct){
     //  this.shop.addmobile(datas);
      
     
    //}
   

}
