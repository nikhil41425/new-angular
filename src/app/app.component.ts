import { Component } from '@angular/core';
import { User } from './main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

  name="nikhil"

  myColor="color"

  myData:any;
  myModel:any;
  templateee:any;
  logInName = 'user'

  myStatement:boolean=false;

  fruits:any[]=["mango","apple","orange"]

  users= [
    {
    "userId": 1,
    "userName": 'User1'
    },
    {
    "userId": 2,
    "userName": 'User2'
    },
    ];
   

  myclick(){

    // this.myData="hello nikhil"

    alert("helloooo")

  }
}
