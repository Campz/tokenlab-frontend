import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { User } from 'src/app/core/models/User';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private user: User;

  constructor(private authService: AuthService) {
    this.user = new User();
  }

  ngOnInit(): void {
    Feather.replace();
  }
}
