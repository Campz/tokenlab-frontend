import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

import { Event } from '../../core/models/Event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  event: Event = new Event();

  constructor() {
    this.event.description = 'Descrição aqui do eventooo';
    this.event.start_date = '2021-11-01T19:20';
  }

  ngOnInit(): void {
    Feather.replace();
  }

  getDay(date: string): string {
    const month = String(new Date(date)).split(' ');
    return month[2];
  }

  getMonth(date: string): string {
    const month = String(new Date(date)).split(' ');
    console.log(month);
    return month[1];
  }

  getHours(start_date: string, end_date: string) {}
}
