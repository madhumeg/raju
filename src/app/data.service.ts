import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Samsungproduct } from './samsungproduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }
  get_samsungimages(){
    return this.http.get(this.baseUrl + '/samsungimages');
}
 
 get_samsung(id:string | number) {
  return this.get_samsungimages().pipe(
    // (+) before `id` turns the string into a number
    map((samsungimages: Samsungproduct[]) => samsungimages.
    find(Samsungproduct => Samsungproduct.id === +id))
  );
 
}

get_mi(){
  return this.http.get(this.baseUrl + '/mi');
}
}
