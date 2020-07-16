import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ems-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '12/12/2020',
    time: '10:12 am',
    price: 20.9,
    imageUrl: '/assets/images/basic-shield.png',
    location: {
      address: '12T 22',
      city: 'London',
      country: 'UK',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
