import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'ems-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(
    private eventsSvc: EventsService,
    private toastSvc: ToastrService
  ) {}

  ngOnInit(): void {
    this.events = this.eventsSvc.getEvents();
  }

  handleClickEvent(name: string): void {
    this.toastSvc.success(name);
  }
}
