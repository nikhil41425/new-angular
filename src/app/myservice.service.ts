import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  addUsers(){
    const users=[
      {
        name:"nikhil",
        age:20
      },
      {
        name:"vamshi",
        age:25
      },
      {
        name:"kiran",
        age:23
      }
    ]
    return users;
  }
 
}
