import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { EventsService } from '../shared/events.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventsListResolverService implements Resolve<any> {
  constructor(private eventsSvc: EventsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventsSvc.getEvents().pipe(map((events) => events));
  }
}
