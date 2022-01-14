import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EntryService } from '../services/entry.service';
import {IUserLogin} from '../models/userLogin';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginValid:boolean = true;
  @Input()
  public isPatient:boolean=true;

  public loginForm ! :FormGroup;

  constructor(public activeModal: NgbActiveModal,private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private entryService:EntryService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    }
    )
  }
  userLogin!: IUserLogin;
  subscription!:Subscription

  loginUser(){
      this.userLogin = {
        "emailId": this.loginForm.value.email,
        "password" : this.loginForm.value.password,
        "roleId" :0
      };
      
     this.subscription = this.entryService.login(this.userLogin).subscribe({
      next:result=>{
        //some operation based on results
        const user:IUserLogin=result.find((a:any)=>{
          return a.email==this.loginForm.value.email && a.password==this.loginForm.value.password
        });
        if(user){
          alert("Login Success!!");
          this.loginForm.reset();
         // this.router.navigate(['dashboard'])
        }else{
          alert("user not found");
        }
      },
      error:err=>{
        console.log(err);
      }
    });
  }
}

