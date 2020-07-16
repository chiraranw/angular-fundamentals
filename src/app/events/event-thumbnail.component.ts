import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ems-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input('event') event: any;
  constructor() {}

  ngOnInit(): void {}

  getTimeClasses() {
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }

    return [];
  }
}
