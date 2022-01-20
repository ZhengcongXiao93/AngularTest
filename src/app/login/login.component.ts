import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginService, private router: Router) { }
  loginForm: any;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),

    });
  }

  login() {
    let user = this.loginForm.value;
    this.loginservice.login(user.username, user.password).then(
      loginto => {
        if (loginto.loginSuccessful) {
          console.log(loginto);
          alert("Login Successful!!!");
        }
       
      }, (err)=>{
        console.log(err);
        alert("Login Failed!!!");
      }

    )
  }
}
