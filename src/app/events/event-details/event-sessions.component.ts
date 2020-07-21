import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../event-model';

@Component({
  selector: 'ems-event-sessions',
  templateUrl: './event-sessions.component.html',
  styleUrls: ['./event-sessions.component.css'],
})
export class EventSessionsComponent implements OnInit {
  @Input('sessions') sessions: ISession[];
  constructor() {}

  ngOnInit(): void {}
}
