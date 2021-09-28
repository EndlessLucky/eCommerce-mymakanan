import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const duplicate = req.clone({headers: req.headers.set('Authorization', this.authService.accessToken ? 'bearer ' + this.authService.accessToken : 'bearer')});
    return next.handle(duplicate).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.authService.logout();
        }
        return throwError(err);
      })
    );
  }
  
}
