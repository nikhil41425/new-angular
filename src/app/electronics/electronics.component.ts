import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  loginForm:FormGroup;
  submitted:boolean=false
  email;
  password;
  checked;

  showcase:any

  constructor( private fb:FormBuilder,private userService:MyserviceService,private dataservice:MyserviceService) { }

  ngOnInit(): void {

    this.showcase=this.dataservice.addUsers();

    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      remember:['',Validators.required]
    })
  }

  get loginDataForm(){
    return this.loginForm.controls
  }

  onSubmit(){
    this.submitted=true;
    console.log("data",this.loginForm.value)
     this.email=this.loginForm.value.email;
     this.password=this.loginForm.value.password;
     this.checked=this.loginForm.value.remember;

  
  }

}
