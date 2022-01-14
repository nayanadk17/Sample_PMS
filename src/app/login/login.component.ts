import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginValid:boolean = true;
  user = new User();

  public loginForm ! :FormGroup;

  constructor(private service:LoginService,public activeModal: NgbActiveModal,private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    }
    )
  }

  loginUser(){
    this.service.loginUser(this.user);
    console.log('Login success');
  }

  loginPatient(){
    this.http.get<any>("http://localhost:3000/registerPatient")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email==this.loginForm.value.email && a.password==this.loginForm.value.password
      });
      if(user){
        alert("Login Success!!");
        this.loginForm.reset();
       // this.router.navigate(['dashboard'])
      }else{
        alert("user not found");
      }
      // },err=>{
      //   alert("Something went wrong!!")
      // }
    })
  
  }
}

