import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  ActivatedRoute,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/shared/events.service';

@Injectable({
  providedIn: 'root',
})
export class InvalidIdGuard implements CanActivate {
  constructor(private eventsSvc: EventsService, private router: Router) {}

  canActivate(activatedRoute: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventsSvc.getEvent(+activatedRoute.params['id']);
    if (!eventExist) {
      this.router.navigate(['/404']);
    }

    return true;
  }
}
