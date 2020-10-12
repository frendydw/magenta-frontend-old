import {Component, Inject, OnInit} from '@angular/core';
import {AudittrailService} from '../shared/services/audittrail.service';
import {ExcelService} from '../shared/excel/excel.service';
import {Router} from '@angular/router';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/models/user';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userList: Observable<User>;
  loginForm: FormGroup;
  username: String;
  password: String;

  constructor(private router: Router,
              private userService: UserService,
              ) {
    sessionStorage.setItem('user_id', '0');
  }

  ngOnInit(): void {
    this.getUserList();
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  getUserList() {
    this.userService.getUserList().subscribe(res =>
        this.userList = res
    );
  }

  loginButton() {
    console.log(this.userList);
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;


    const user = this.userList.filter(function (user) {
      return user.username == username;
    });

    const userData = user[0];

    if (!userData) {
      alert('wrong username!');
      return;
    } else if (userData.password != password) {
      alert('wrong password!');
      return;
    } else {
      sessionStorage.setItem('user_id', userData.id);
      sessionStorage.setItem('user_username', userData.username);

      this.router.navigate([`/dashboard`]);
    }
  }
}
