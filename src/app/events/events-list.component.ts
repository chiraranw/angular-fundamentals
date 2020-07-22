import { Component, OnInit, Inject } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { IEvent } from './event-model';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';

@Component({
  selector: 'ems-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(
    private eventsSvc: EventsService,
    private activatedRt: ActivatedRoute,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit(): void {
    this.events = this.activatedRt.snapshot.data['events'];
  }
}
