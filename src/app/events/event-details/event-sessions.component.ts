import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ISession } from '../event-model';

@Component({
  selector: 'ems-event-sessions',
  templateUrl: './event-sessions.component.html',
  styleUrls: ['./event-sessions.component.css'],
})
export class EventSessionsComponent implements OnInit, OnChanges {
  @Input('sessions') sessions: ISession[];
  @Input('filterBy') filterBy: string;
  public visibleSessions: ISession[] = [];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges....');

    if (this.sessions) {
      this.filterBySessions(this.filterBy);
    }
  }
  filterBySessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter((session) => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

  ngOnInit(): void {}
}
