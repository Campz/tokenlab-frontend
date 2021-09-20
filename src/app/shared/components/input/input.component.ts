import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() placeholder: string;
  @Input() type: string;

  constructor() {
    this.placeholder = '';
    this.type = '';
  }

  ngOnInit(): void {
  }

}
