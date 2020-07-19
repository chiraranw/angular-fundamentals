import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: IUser;

  constructor() {}

  login(username: string, password: string): IUser {
    this.currentUser = {
      id: 1,
      firstName: 'Nation',
      lastname: 'Chirara',
      username: 'chiraranw',
    };
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
