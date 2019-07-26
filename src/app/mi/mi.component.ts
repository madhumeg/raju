import { Component, OnInit, OnDestroy } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { DataService } from '../data.service';
import { Samsungproduct } from '../samsungproduct';
import { Observable } from 'rxjs';
 import { ShopcartService } from '../shopcart.service';

@Component({
  selector: 'app-mi',
  templateUrl: './mi.component.html',
  styleUrls: ['./mi.component.css']
})
export class MiComponent implements OnInit{

   datas: Observable<Samsungproduct>;
    mobiles:Samsungproduct[];
    product:Samsungproduct;
   public samsu:any=[];
  constructor(private route:ActivatedRoute,
              private service:DataService,
              private shop:ShopcartService) 
              { 
                
              }

  ngOnInit() {
    this.datas = this.route.paramMap.pipe(
       switchMap((params:ParamMap)=>
       this.service.get_samsung(params.get('id')))
      
    );
    console.log(this.datas);
     this.service.get_samsungimages().subscribe((res: any[])=>{
      this.samsu=res;
      
        
    })
  }
    senditem(datas:Samsungproduct){
       this.shop.addmobile(datas);
       
      
     
    }
        
      }
       
    

    
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.dataId=id;
  


