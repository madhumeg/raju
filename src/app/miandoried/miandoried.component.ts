import { Component, OnInit } from '@angular/core';
import  { DataService } from '../data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-miandoried',
  templateUrl: './miandoried.component.html',
  styleUrls: ['./miandoried.component.css']
})
export class MiandoriedComponent implements OnInit {


  public miandroied:any[];

  constructor(
    private data:DataService,
    private route:Router
  ) {
    this.data.get_mi().subscribe((res:any[])=>{
              this.miandroied=res;
    });
   }

  ngOnInit() {
  }

}
