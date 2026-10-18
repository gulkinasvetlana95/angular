import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {
    if (!this.email.trim() || !this.password) {
      alert('Введи email и пароль');
      return;
    }

    const success = this.authService.login(
      this.email,
      this.password
    );

    if (!success) {
      alert('Неверный email или пароль');
      return;
    }

    this.router.navigate(['/']);
  }
}