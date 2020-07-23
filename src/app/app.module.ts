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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { EventSessionsComponent } from './events/event-details/event-sessions.component';
import { DurationPipe } from './shared/duration.pipe';
import {
  Toastr,
  TOASTR_TOKEN,
  JQ_TOKEN,
  CollapsibleWellComponent,
} from './common/index';
import { SimpleModalComponent } from './common/simple-modal.component';
import { TriggerModalDirective } from './common/trigger-modal.directive';
import { UpvoteComponent } from './events/upvote.component';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

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
    CreateSessionComponent,
    EventSessionsComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    TriggerModalDirective,
    UpvoteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  return true;
}
