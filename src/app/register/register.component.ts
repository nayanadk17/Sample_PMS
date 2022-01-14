import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm ! :FormGroup;
  constructor(public activeModal: NgbActiveModal, private formBuilder:FormBuilder,private http:HttpClient,private router:Router ) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      fullName:[''],
      email:[''],
      password:[''],
      mobile:['']
    }

    )
  }

  registerPatient(){
    this.http.post<any>("http://localhost:3000/registerPatient",this.registerForm.value)
    .subscribe(
      res=>{
        alert("Register successful");
        this.registerForm.reset();
        this.router.navigate(['login']);
      },err=>{
        alert("Something went wrong")
      }
    )
  }

}
