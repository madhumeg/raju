import { Component, OnInit } from '@angular/core';
import  { DataService } from '../data.service';
import {Router} from '@angular/router';
import { AndroiedService } from '../androied.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-samsungandroid',
  templateUrl: './samsungandroid.component.html',
  styleUrls: ['./samsungandroid.component.css'],
  animations: [
    trigger('buttonState', [
      state('inactive', style({
        backgroundColor: 'red'
       })),
      state('active', style({
        backgroundColor: 'green'
       })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class SamsungandroidComponent implements OnInit {
  images = [{"title":"Save upto ₹ 29,002* on select Dell Notebooks & PCs and get headphones worth ₹ 7,490 at just ₹ 99.","image":"lap.jpg","title1":"Your one stop shop for exclusive tech."},
            {"title":"defg","image":"mobile.jpg"},
           
            {"title":"hijk","image":"tv.jpg"},
            {"title":"lmno","image":"wa.jpg"},
          ];
            

   public androiedimages:any[];
  constructor(
    private ser:AndroiedService,
    private rout:Router
  ) {
    this.ser.get_androied().subscribe((res:any[])=>{
                this.androiedimages=res;
    });
   }
   onselected(sam){
    this.rout.navigate(['/productc', sam.id]);
  }

  ngOnInit() {
  }

}
