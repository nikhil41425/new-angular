import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-httpmethods',
  templateUrl: './httpmethods.component.html',
  styleUrls: ['./httpmethods.component.css']
})
export class HttpmethodsComponent implements OnInit {

  constructor(private httpservice:MyserviceService) { }

  data:any=[];

  ngOnInit(): void {
    
   this.data= this.httpservice.addUsers().subscribe((value)=>{

    this.data=value
    console.log("data",this.data);
   });
   
   

  }

}
