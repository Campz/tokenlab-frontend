import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css'],
})
export class EventModalComponent implements OnInit {
  show: boolean = false;
  modalTitle: string = '';
  isUpdate: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.show = !this.show;
  }
}
