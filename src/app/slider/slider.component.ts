import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images = [{"title":"Innovate, create, and make your world a better place—discover the best of HP","image":"lap.jpg","title1":"Upgrade to Modern PC"},
            {"title":"The Mi 8 Pro has the distinction of being the first Xiaomi phone to offer an in-display fingerprint sensor.","image":"mobile.jpg"},
           
            {"title":"This cricket Season Wish&win*with SonyTv","image":"tv.jpg"},
            {"title":"Top 100 Deals","title1":"UPTO 70% OFF","image":"wa.jpg"},
          ];
            

  constructor() { }

  ngOnInit() {
  }

}
