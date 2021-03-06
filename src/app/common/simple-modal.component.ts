import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ems-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css'],
})
export class SimpleModalComponent implements OnInit {
  @Input('title') title: string;

  constructor() {}

  ngOnInit(): void {}
}
