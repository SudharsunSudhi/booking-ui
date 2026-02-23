import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  api = 'https://localhost:5001/api/auth';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<any>(`${this.api}/login`, data);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
  }
}