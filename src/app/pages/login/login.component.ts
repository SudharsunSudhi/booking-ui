import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  model = { username: '', password: '' };
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.model).subscribe({
      next: (res: any) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/dashboard']);
      },
      error: () => this.error = 'Invalid credentials'
    });
  }
}