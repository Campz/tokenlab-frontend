import { HttpClient } from '@angular/common/http';
import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apolo: Apollo) {
    this.registerForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  registerUser() {
    const { name, email, password } = this.registerForm.getRawValue();
    console.log({
      name,
      email,
      password,
    });

    const createUser = gql`
      mutation createUser($name: String!, $email: String!, $password: String!) {
        createUser(name: $name, email: $email, password: $password) {
          id
        }
      }
    `;

    this.apolo
      .mutate({
        mutation: createUser,
        variables: {
          name,
          email,
          password,
        },
      })
      .subscribe();
  }
}
