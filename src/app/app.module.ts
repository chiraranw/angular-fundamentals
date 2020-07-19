import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorNotFoundComponent } from './errors/error-not-found.component';
import { ProfileComponent } from './users/profile.component';

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
