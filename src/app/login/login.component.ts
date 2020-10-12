import {Component, OnInit} from '@angular/core';
import {AudittrailService} from '../shared/services/audittrail.service';
import {ExcelService} from '../shared/excel/excel.service';
import {Router} from '@angular/router';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/models/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userList: Observable<User>;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // this.getUserList();
  }

  // getUserList() {
  //   this.userList = this.userService.getUserList();
  //
  //   this.userList.subscribe(res => console.log(res));
  // }


}
