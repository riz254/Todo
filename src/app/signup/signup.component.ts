import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  registerUserData = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  registerUser() {
    if (
      this.registerUserData.password !== this.registerUserData.confirmPassword
    ) {
      console.log('Passwords do not match!');
      alert('Passwords do not match!');
      return;
    }

    this.auth.registerUser(this.registerUserData).subscribe(
      (res) => {
        console.log(res), localStorage.setItem('token', res.token);
        this.router.navigate(['/login']); // Redirect after
      },
      (err) => console.log(err)
      //  // Store JWT token
    );
  }
}
