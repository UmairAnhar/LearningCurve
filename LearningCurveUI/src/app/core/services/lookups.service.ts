import { Injectable } from '@angular/core';
import { BaseService } from "./base.service";
import { KeyValue } from "../models/key-value.model";
import { Observable, map, shareReplay } from "rxjs";
import { ResponseResult } from "../models/response-result.model";
import { SearchRequestModel } from "../models/search-request.model";
import { TimeZoneModel } from '../models/time-zone.model';

@Injectable({
  providedIn: 'root'
})
export class LookupsService extends BaseService {

  cachedTimezone$!: Observable<ResponseResult<TimeZoneModel[]>>;

  constructor() {
    super();
  }

  getTimeZoneList(): Observable<ResponseResult<TimeZoneModel[]>> {
    if (!this.cachedTimezone$) {
      this.cachedTimezone$ = this.get<ResponseResult<TimeZoneModel[]>>('lookups/time-zones').pipe(
        map(response => response),
        shareReplay(1)
      );
    }
    return this.cachedTimezone$;
  }

  getAllEvents(searchModel: SearchRequestModel): Observable<ResponseResult<KeyValue<string, string>[]>> {
    return this.get<ResponseResult<KeyValue<string, string>[]>>(`lookups/Events?pageSize=${searchModel.pageSize}&pageNumber=${searchModel.pageNumber}`)
      .pipe(
        map((response => response)),
      )
  }
}