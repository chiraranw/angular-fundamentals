import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavComponent } from './nav';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ErrorNotFoundComponent } from './errors/error-not-found.component';
import { ProfileComponent } from './users';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
} from './events';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorNotFoundComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  return component.isDirty;
}
