import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { appConstant } from '../extensions/app-constants';

@Injectable()
export class LocationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const locationId = localStorage.getItem(appConstant.selectedLocationId)
    request = request.clone({
        setHeaders: { 'x-learning-curve-location-id': (locationId == null && locationId == undefined) ? '' : locationId }
    });

    return next.handle(request);
  }
}
