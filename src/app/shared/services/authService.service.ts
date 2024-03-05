import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';
  private nameKey = 'auth_name';
  private token = new BehaviorSubject<string | null>(this.getTokenFromLocalStorage());
  private name = new BehaviorSubject<string | null>(this.getNameFromLocalStorage());

  constructor(private router: Router) { }

  private getTokenFromLocalStorage(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private getNameFromLocalStorage(): string | null {
    return localStorage.getItem(this.nameKey);
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
    this.token.next(token);
  }

  getToken() {
    return this.token.asObservable();
  }

  setName(name: string) {
    localStorage.setItem(this.nameKey, name);
    this.name.next(name);
  }

  getName() {
    return this.name.asObservable();
  }

  logout() {
    localStorage.clear();
    return this.router.navigate(['/login']);
  }
}
