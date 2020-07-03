import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user.model';
import { HttpResponse } from '@angular/common/http';
import { Login } from 'src/app/interfaces/login';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  errorMsg: string;
  constructor(public userService: UserService) { }
  register(registerForm: NgForm): void {
    console.log(registerForm);
    if (!registerForm.valid) {
      setTimeout(() => this.errorMsg = '', 2500);
      this.errorMsg = 'Revisa tus campos';
      return;
    }
    const user: User = registerForm.value;
    this.userService.register(user)
      .subscribe(res => {
        console.log;
      });
  }
}