import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { Event } from 'src/app/core/models/Event';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css'],
})
export class EventModalComponent implements OnInit {
  show: boolean = false;
  modalTitle: string = '';
  isUpdate: boolean = false;
  event: Event = new Event();
  eventForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService
  ) {
    this.eventForm = formBuilder.group({
      description: '',
      start_date: '',
      start_time: '',
      end_date: '',
      end_time: '',
    });
  }

  ngOnInit(): void {}

  toggle() {
    console.log(this.event);
    if (this.isUpdate) {
      this.eventForm = this.formBuilder.group({
        description: this.event.description,
        start_date: '',
        start_time: '',
        end_date: '',
        end_time: '',
      });
    }
    this.show = !this.show;
  }

  confirm() {
    const { description, start_date, start_time, end_date, end_time } =
      this.eventForm.getRawValue();
    const start = `${start_date}T${start_time}`;
    const end = `${end_date}T${end_time}`;
    if (this.isUpdate) {
    } else {
      this.eventService.create(description, start, end).subscribe(
        ({ data }) => {
          console.log(data);
        },
        (error) => {
          alert(error);
        }
      );
    }
    this.show = false;
  }
}
