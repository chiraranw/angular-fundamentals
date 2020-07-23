import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { ISession } from '../events';
import { EventsService } from '../shared/events.service';

@Component({
  selector: 'ems-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  searchTerm: string = '';
  foundSession: ISession[];
  constructor(public eventsScv: EventsService, public authSvc: AuthService) {}

  ngOnInit(): void {}

  searchSessions(searchTerm): any {
    this.eventsScv.searchSession(searchTerm).subscribe((session) => {
      this.foundSession = session;
      console.log(this.foundSession);
    });
  }
}
