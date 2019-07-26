import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SliderComponent } from './slider/slider.component';
import { HometrendComponent } from './hometrend/hometrend.component';
import { HomeofferComponent } from './homeoffer/homeoffer.component';
import { HomeComponent } from './home/home.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { SamsungComponent } from './samsung/samsung.component';
import { MiComponent } from './mi/mi.component';
import { CatePipe } from './cate.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SamsunigcategoryComponent } from './samsunigcategory/samsunigcategory.component';
import { SamsunigsubcategoryComponent } from './samsunigsubcategory/samsunigsubcategory.component';
import { SamsungnormalComponent } from './samsungnormal/samsungnormal.component';
import { SamsungandroidComponent } from './samsungandroid/samsungandroid.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';
import { CartComponent } from './cart/cart.component';
import { MidetComponent } from './midet/midet.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AndroidproductComponent } from './androidproduct/androidproduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiandoriedComponent } from './miandoried/miandoried.component';
import { LenvoComponent } from './lenvo/lenvo.component';
import { HpComponent } from './hp/hp.component';
import { PanasonicComponent } from './panasonic/panasonic.component';
import { SonyComponent } from './sony/sony.component';
import { WashingComponent } from './washing/washing.component';
import { RefrigerComponent } from './refriger/refriger.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SliderComponent,
    HometrendComponent,
    HomeofferComponent,
    HomeComponent,
    SamsungComponent,
    MiComponent,
    CatePipe,
    SamsunigcategoryComponent,
    SamsunigsubcategoryComponent,
    SamsungnormalComponent,
    SamsungandroidComponent,
    MainbodyComponent,
    MainfooterComponent,
    CartComponent,
    MidetComponent,
    AndroidproductComponent,
    MiandoriedComponent,
    LenvoComponent,
    HpComponent,
    PanasonicComponent,
    SonyComponent,
    WashingComponent,
    RefrigerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
