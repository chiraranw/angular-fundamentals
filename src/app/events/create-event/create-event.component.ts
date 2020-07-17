import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ems-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  isDirty = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
