import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserContextService {
  private _user: User = { username: '', email: '' };

  get user() {
    return this._user;
  }

  setUser(user: User) {
    this._user = user;
  }
}
