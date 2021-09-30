import { Component, OnInit } from '@angular/core';

import * as Feather from 'feather-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.registerForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {
    Feather.replace();
  }

  registerUser() {
    const { name, email, password } = this.registerForm.getRawValue();

    this.userService.createUser(name, email, password).subscribe(
      ({ data }) => {
        console.log(data);
      },
      (error) => {
        alert(error);
      }
    );
  }
}
