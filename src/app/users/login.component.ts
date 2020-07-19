import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ems-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(formValues): void {
    this.authSvc.login(formValues.userName, formValues.password);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
