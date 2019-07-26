import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainfooter',
  templateUrl: './mainfooter.component.html',
  styleUrls: ['./mainfooter.component.css']
})
export class MainfooterComponent implements OnInit {
  mainfooters:any[]=[{"name":"abcd","image":"laptap.png"},
                    {"name":"defg","image":"tv.jpg"},
                    {"name":"hijk","image":"watch.jpg"}];
  constructor() { }

  ngOnInit() {
  }

}
