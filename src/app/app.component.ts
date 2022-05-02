import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Main } from './main';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

  data:any[]=[]
   
  formData:Main = new Main

  validF:boolean=true

  onFormSubmit(myData:NgForm){
    this.validF=false
    this.data.push(myData.value)
    myData.resetForm();
  }

  delete(i:any){
    this.data.splice(i,1)
  }
  
}
