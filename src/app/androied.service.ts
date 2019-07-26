import { Injectable } from '@angular/core';
import { Androidprodut } from './androidprodut';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AndroiedService {
  baseUrl:string = "http://localhost:3000";

  constructor(private htt:HttpClient) { }
  get_androied()
{
  return this.htt.get(this.baseUrl + '/ramms');
}
get_samsungg(id:string | number) {
  return this.get_androied().pipe(
    // (+) before `id` turns the string into a number
    map((ramms: Androidprodut[])=> ramms.
    find(Androidprodut => Androidprodut.id === +id))
  );
 
};

}
