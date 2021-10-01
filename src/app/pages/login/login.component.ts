import { Component, OnInit } from '@angular/core';

import * as Feather from 'feather-icons';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {
    Feather.replace();
  }

  login() {
    const { email, password } = this.loginForm.getRawValue();

    this.authService.createSession(email, password).subscribe(
      ({ data }) => {
        console.log(data);
        localStorage.setItem('JWT', data.createSession.token);
        this.router.navigate(['home']);
      },
      (error) => {
        alert(error);
      }
    );
  }
}
