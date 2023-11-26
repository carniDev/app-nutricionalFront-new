import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('auth_service');
    if (token) {
        const clonedReq = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(clonedReq).pipe(
          catchError((error: HttpErrorResponse) => {
              if (error.status === 403) {
                  localStorage.removeItem('auth_service');
                  this.router.navigate(['']);
              }
              return throwError(() => error);
          })
        );
    }

    return next.handle(request);
  }
}
