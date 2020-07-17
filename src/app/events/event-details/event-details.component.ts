import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ems-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: any;
  constructor(
    private eventsSvc: EventsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.event = this.eventsSvc.getEvent(
      +this.activatedRoute.snapshot.params['id']
    );
  }
}
