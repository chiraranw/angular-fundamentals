import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../event-model';
import { EventsService } from 'src/app/shared/events.service';

@Component({
  selector: 'ems-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  isDirty = false;
  constructor(private router: Router, private eventsSvc: EventsService) {}

  newEvent: IEvent;

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(['/events']);
  }
  saveEvent(event: IEvent) {
    this.eventsSvc.saveEvent(event);
    this.router.navigate(['/events']);
  }
}
