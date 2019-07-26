import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-samsung',
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.css']
})
export class SamsungComponent implements OnInit {
   show:boolean=false;
  toggleshow(){
     this.show = ! this.show;
  }
  constructor(private rout:Router) {
    
   }

  ngOnInit() {
  }
  onselect(data){
    this.rout.navigate(['/mi', data.id]);
    console.log("welcome");''
  }


}
