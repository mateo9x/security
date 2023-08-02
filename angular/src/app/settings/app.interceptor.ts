import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {SnackbarService} from "../services/material/snackbar.service";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private tokenService: SnackbarService) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const jwt = this.tokenService.getToken();

    if (jwt) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + jwt
        }
      });
    }
    return next.handle(request);
  }

}
