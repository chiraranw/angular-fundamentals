import { Route } from '@angular/compiler/src/core';

import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorNotFoundComponent } from './errors/error-not-found.component';
import { InvalidIdGuard } from './events/event-details/invalid-id.guard';
export const routes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  { path: 'events', component: EventsListComponent },
  { path: '404', component: ErrorNotFoundComponent },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [InvalidIdGuard],
  },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
];
