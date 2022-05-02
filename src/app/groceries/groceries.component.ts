import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

  status:any

  constructor(private myService:MyserviceService) { }

  ngOnInit(): void {

   let obj=new Observable((observer)=>{

     setTimeout(() => {
       observer.next('pending...')
     }, 3000);

     setTimeout(() => {
       observer.next("processing...")
     }, 6000);

     setTimeout(() => {
       observer.next("payment success !!!")
     }, 9000);

     setTimeout(() => {
       observer.error("erthere is error")
     }, 10000);

     setTimeout(() => {
       observer.complete();
     }, 9000);

     setTimeout(() => {
      observer.next("after payment success")
    }, 10000);


   });

   obj.subscribe((value)=>{

    this.status=value
     
   })
    
  }

  


}
