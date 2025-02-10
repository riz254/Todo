import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private registerUrl = 'http://172.16.10.16:8080/api/v1/auth/register'; // URL of your Spring Boot API
  private loginUrl = 'http://172.16.11.105:8080/auth/login';
  private registerUrl = 'http://172.16.11.105:8080/auth/register'; // URL of your Spring Boot API
  // private loginUrl = 'http://172.16.8.24:8080/auth/login';

  constructor(private http: HttpClient) {}

  // post uers from the backend ---register user method accepts user object and returns an observable
  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.registerUrl, user);
  }

  // post login from the backend ---login user method accepts user object and returns an observable
  loginUser(user: any): Observable<any> {
    return this.http.post<any>(this.loginUrl, user);
  }
}
