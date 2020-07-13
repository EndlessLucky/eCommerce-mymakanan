import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register(body: any) {
    const url = `${environment.api}/users`;
    return this.http.post(url, body);
  }

  login(body: any) {
    const url = `${environment.api}/auth/login`;
    return this.http.post(url, body);
  }
}
