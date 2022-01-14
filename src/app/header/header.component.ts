import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() 
  public sidenavToggle = new EventEmitter();

  closeResult = '';
  
  constructor(private modalService: NgbModal){}

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  openLogin(i:number) {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.isPatient=i==1?true:false
  }

  openRegister(){
    const modalRef = this.modalService.open(RegisterComponent);
  }

}


