import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { UserDetail } from 'src/app/model/user-detail';
import { Constants } from 'src/app/model/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userDetails: Array<UserDetail> = [];
  constructor(
    private auth: AuthenticationServiceService,
    private router: Router) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList = () => {
    this.auth.getUserList().subscribe(
      data => {
        this.userDetails = Object.assign([], data);
      },
      error => {
        console.log(` getting error to authenticate user ${error}`);
      }
    )
  }
  logout = () => {
    sessionStorage.removeItem(Constants.AUTHENTICATE);
    this.router.navigate(['/login']);
  }

}
