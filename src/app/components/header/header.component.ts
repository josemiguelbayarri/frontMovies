import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private UserService:UserService) { }
  ngOnInit(): void {
    console.log('soy el header')
  }
  getUser(): User {
    return this.UserService.getUser();
  }
  logout(): void {
    this.UserService.logout();
    this.UserService.setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}