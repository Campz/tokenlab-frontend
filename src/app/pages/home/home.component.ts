import { Component, OnInit } from '@angular/core';

import * as Feather from 'feather-icons';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  events: Observable<any> | null = null;
  constructor(
    private authService: AuthService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    Feather.replace();
    this.events = this.eventService
      .get()
      .valueChanges.pipe(map((result) => result.data.events));
  }

  getDay(date: string): string {
    const month = String(new Date(date)).split(' ');
    return month[2];
  }

  getMonth(date: string): string {
    const month = String(new Date(date)).split(' ');
    return month[1];
  }

  getHours(start_date: string, end_date: string) {}

  logout() {
    this.authService.logout();
  }
}
