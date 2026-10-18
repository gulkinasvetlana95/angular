import { Injectable } from '@angular/core';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = JSON.parse(
    localStorage.getItem('users') || '[]'
  );

  currentUser: User | null = JSON.parse(
    localStorage.getItem('currentUser') || 'null'
  );

  register(email: string, password: string): boolean {
    const normalizedEmail = email.trim().toLowerCase();

    const exists = this.users.some(
      user => user.email === normalizedEmail
    );

    if (exists) {
      return false;
    }

    const newUser: User = {
      email: normalizedEmail,
      password
    };

    this.users.push(newUser);

    localStorage.setItem(
      'users',
      JSON.stringify(this.users)
    );

    return true;
  }

  login(email: string, password: string): boolean {
    const normalizedEmail = email.trim().toLowerCase();

    const user = this.users.find(
      user =>
        user.email === normalizedEmail &&
        user.password === password
    );

    if (!user) {
      return false;
    }

    this.currentUser = user;

    localStorage.setItem(
      'currentUser',
      JSON.stringify(user)
    );

    return true;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }
}