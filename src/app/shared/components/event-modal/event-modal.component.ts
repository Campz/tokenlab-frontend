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
  eventForm: FormGroup;
  event: Event = new Event();

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

  updateEventData() {
    if (this.isUpdate) {
      const startDateSplited = this.event.start_date.split('T');
      const startTimeSplited = startDateSplited[1].split('.');
      const endDateSplited = this.event.end_date.split('T');
      const endTimeSplited = endDateSplited[1].split('.');

      this.eventForm = this.formBuilder.group({
        description: this.event.description,
        start_date: startDateSplited[0],
        start_time: startTimeSplited[0],
        end_date: endDateSplited[0],
        end_time: endTimeSplited[0],
      });
    } else {
      this.eventForm = this.formBuilder.group({
        description: '',
        start_date: '',
        start_time: '',
        end_date: '',
        end_time: '',
      });
    }
  }

  toggle() {
    this.show = !this.show;
  }

  confirm() {
    const { description, start_date, start_time, end_date, end_time } =
      this.eventForm.getRawValue();
    const start = `${start_date}T${start_time}`;
    const end = `${end_date}T${end_time}`;
    if (this.isUpdate) {
      this.eventService
        .update(this.event.id, description, start, end)
        .subscribe(
          ({ data }) => {
            console.log(data);
            window.location.reload();
          },
          (error) => {
            alert(error);
          }
        );
    } else {
      this.eventService.create(description, start, end).subscribe(
        ({ data }) => {
          console.log(data);
          window.location.reload();
        },
        (error) => {
          alert(error);
        }
      );
    }
    this.show = false;
  }
}
