import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ISession } from '../event-model';
import { AuthService } from 'src/app/users/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'ems-event-sessions',
  templateUrl: './event-sessions.component.html',
  styleUrls: ['./event-sessions.component.css'],
})
export class EventSessionsComponent implements OnInit, OnChanges {
  @Input('sessions') sessions: ISession[];
  @Input('filterBy') filterBy: string;
  @Input('sortBy') sortBy: string;
  public visibleSessions: ISession[] = [];
  constructor(public authSvc: AuthService, private voterSvc: VoterService) {}

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterSvc.deleteVoter(session, this.authSvc.currentUser.username);
    } else {
      this.voterSvc.addVoter(session, this.authSvc.currentUser.username);
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotes);
    }
  }
  userHasVoted(session: ISession) {
    return this.voterSvc.userHasVoted(
      session,
      this.authSvc.currentUser.username
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions) {
      this.filterBySessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByName)
        : this.visibleSessions.sort(sortByVotes);
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

function sortByName(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotes(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
