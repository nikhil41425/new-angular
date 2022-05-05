import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient ) { }


  api="https://jsonplaceholder.typicode.com/users";

   addUsers(){
    return this.http.get(this.api)
   }


















  // addUsers(){
  //   const users=[
  //     {
  //       name:"nikhil",
  //       age:20
  //     },
  //     {
  //       name:"vamshi",
  //       age:25
  //     },
  //     {
  //       name:"kiran",
  //       age:23
  //     }
  //   ]
  //   return users;
  // }
 
}
