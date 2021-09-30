import { Component, Input, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() placeholder: string;
  @Input() type: string;
  @Input() icon: string;

  constructor() {
    this.placeholder = '';
    this.type = '';
    this.icon = '';
  }

  ngOnInit(): void {
    Feather.replace();
  }
}
