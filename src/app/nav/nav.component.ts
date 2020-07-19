import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';

@Component({
  selector: 'ems-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public authSvc: AuthService) {}

  ngOnInit(): void {}
}
