import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const token = localStorage.getItem('token'); // token保存在localstorage
    const token = `i'm token`
    if (token) {
      // 如果有token，就添加
      req = req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        },
      });
    }
    console.log(req)
    return next.handle(req);
  }
}
