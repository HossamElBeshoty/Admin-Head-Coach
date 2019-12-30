import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class NotifyInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (
      !req.url.includes('api') ||
      req.method === 'GET' ||
      req.url.includes('accounts/advancedSearch') || req.url.includes('artworks/searchUse')
    ) {
      return next.handle(req);
    } else {
      return next.handle(req).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && event.status === 200) {
            if (req.method === 'POST') {
              this.toastr.success('Added Successfully');
            }
            if (req.method === 'DELETE') {
              this.toastr.error('Deleted Successfully');
            }
            if (req.method === 'PUT') {
              this.toastr.info('Edited Successfully');
            }
          }

          if (event instanceof HttpResponse && event.status === 401) {
            this.toastr.error('Error happened');
          }
        }),
      );
    }
  }
}
