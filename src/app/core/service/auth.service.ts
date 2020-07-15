import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { environment } from '../../../environments/environment';
import { DecodedToken, LoginResponse, User, UserRole } from '../models/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);
  user: User;
  user$: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);

  set accessToken(value: string) {
    this.localStorage.set(environment.localStorage.accessToken, value);
  }

  get accessToken(): string {
    return this.localStorage.get(environment.localStorage.accessToken);
  }

  get isLoggedIn(): boolean {
    return Boolean(this.accessToken);
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService,
  ) { }

  register(body: any) {
    const url = `${environment.api}/users`;
    return this.http.post(url, body);
  }

  login(body: any): Observable<LoginResponse> {
    const url = `${environment.api}/auth/login`;
    return this.http.post<LoginResponse>(url, body).pipe(
      tap(res => {
        this.authenticateUser(res.accessToken);
      })
    );
  }

  authenticateUser(token: string) {
    this.accessToken = token;
    this.isLoggedIn$.next(this.isLoggedIn);
    this.getAuth().toPromise();
  }

  getAuth(): Observable<User> {
    const url= `${environment.api}/auth/profile`;
    return this.http.get<User>(url).pipe(
      tap(res => {
        this.user = res;
        this.user$.next(this.user);
      })
    );
  }

  setAuth(socialUser): void{
    this.user = socialUser;
    this.user$.next(this.user);
  }

  async decodeToken(): Promise<DecodedToken> {
    try {
      const token = this.accessToken;
      return jwt_decode(token);
    } catch (e) {
      return null;
    }
  }

  async navigateByUserRole(role?: UserRole) {
    if (!role) {
      const token = await this.decodeToken();
      role = token.role;
    }
    if (role === UserRole.Customer || role === UserRole.Supplier) {
      this.router.navigate(['']);
    }else{
      this.logout();
    }
  }

  logout() {
    this.accessToken = null;
    this.isLoggedIn$.next(this.isLoggedIn);
    this.user = null;
    this.user$.next(this.user);
    this.router.navigate(['/auth', 'login']);
  }
}
