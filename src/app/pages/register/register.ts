import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register(): void {
    if (!this.email.trim() || !this.password) {
      alert('Заполни все поля');
      return;
    }

    const success = this.authService.register(
      this.email,
      this.password
    );

    if (!success) {
      alert('Этот email уже зарегистрирован');
      return;
    }

    alert('Регистрация успешна! Теперь войди в аккаунт.');

    this.router.navigate(['/login']);
  }
}