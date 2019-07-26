import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamsungComponent } from './samsung/samsung.component';
import { MiComponent } from './mi/mi.component';
import { MainComponent } from './main/main.component';
import { SamsungnormalComponent } from './samsungnormal/samsungnormal.component';
import { SamsungandroidComponent } from './samsungandroid/samsungandroid.component';

import { CartComponent } from './cart/cart.component';
import { AndroidproductComponent } from './androidproduct/androidproduct.component';
import { MiandoriedComponent } from './miandoried/miandoried.component';
import { LenvoComponent } from './lenvo/lenvo.component';
import { HpComponent } from './hp/hp.component';
import { PanasonicComponent } from './panasonic/panasonic.component';
import { SonyComponent } from './sony/sony.component';
import { WashingComponent } from './washing/washing.component';
import { RefrigerComponent } from './refriger/refriger.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'sam',component:SamsungComponent,children:[
    {path:'samandroid',component:SamsungnormalComponent},
    {path:'',component:SamsungandroidComponent}]
       
},
  {path:'product/:id',component:MiComponent},
  {path:'productc/:id',component:AndroidproductComponent},
  {path:'cart',component:CartComponent},
  {path:'mi',component:MiandoriedComponent},
  {path:'lenvo',component:LenvoComponent},
  {path:'hp',component:HpComponent},
  {path:'panason',component:PanasonicComponent},
  {path:'sony',component:SonyComponent},
  {path:'washing',component:WashingComponent},
  {path:'refri',component:RefrigerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
