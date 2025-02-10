import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginUserData = {
    username: '',
    password: '',
  };

  constructor(private auth: AuthService, private router: Router) {}

  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        console.log('Login successful', res);
        localStorage.setItem('token', res.token); // Store JWT token
        this.router.navigate(['/dashboard']); // Redirect after login
      },
      (err) => {
        console.error('Login failed', err);
      }
    );
  }
}
