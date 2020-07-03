import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private UserService: UserService) {}
  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.UserService.setUser(user);
  }
}