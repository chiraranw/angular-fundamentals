import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ems-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(
    private eventsSvc: EventsService,
    private toastSvc: ToastrService,
    private activatedRt: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.events = this.activatedRt.snapshot.data['events'];
  }

  handleClickEvent(name: string): void {
    this.toastSvc.success(name);
  }
}
