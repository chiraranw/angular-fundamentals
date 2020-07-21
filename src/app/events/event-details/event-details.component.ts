import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { ISession, IEvent } from '../event-model';

@Component({
  selector: 'ems-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  constructor(
    private eventsSvc: EventsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.event = this.eventsSvc.getEvent(
      +this.activatedRoute.snapshot.params['id']
    );
  }

  addSession() {
    this.addMode = true;
  }

  onCancelAddSesion($event): void {
    this.addMode = false;
  }

  saveSession(session: ISession): void {
    const id = Math.max.apply(
      null,
      this.event.sessions.map((s) => s.id)
    );
    session.id = id + 1;
    this.event.sessions.push(session);
    this.eventsSvc.updateSession(this.event);
    this.addMode = false;
  }
}
