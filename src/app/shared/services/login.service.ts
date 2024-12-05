import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor() {}

  login(username: string, email: string) {
    return of({ username, email }).pipe(delay(1000));
  }

  logout() {
    console.log('Logout');
  }
}
