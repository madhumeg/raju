import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Samsungproduct } from '../samsungproduct';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-samsungnormal',
  templateUrl: './samsungnormal.component.html',
  styleUrls: ['./samsungnormal.component.css']
})
export class SamsungnormalComponent implements OnInit {
  public samsungimages:Samsungproduct[]=[];
  

  constructor(private service:DataService,
              private rout:Router) {
    this.service.get_samsungimages().subscribe((res: any[])=>{  
      this.samsungimages=res;
      
  });
   
   
   }
   onselected(samsung){
     this.rout.navigate(['/product', samsung.id]);
   }
   

  ngOnInit() {
  }
  
}
