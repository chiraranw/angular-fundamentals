import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ems-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css'],
})
export class UpvoteComponent implements OnInit {
  @Input('voted') voted: boolean;
  @Input('count') count: number;
  @Output('vote') vote: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.vote.emit({});
  }
}
