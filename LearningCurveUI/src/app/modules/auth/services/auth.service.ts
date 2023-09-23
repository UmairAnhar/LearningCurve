import { Injectable } from '@angular/core';
import { appConstant } from 'src/app/core/extensions/app-constants';
import { isNull } from 'src/app/core/extensions/helpers';
import { BaseService } from 'src/app/core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor() {
    super();
  }

  public get token(): string | null {
    let data = localStorage.getItem(appConstant.jwtTokenName);
    let token = '';

    if (!isNull(data))
      token = JSON.parse(data!).bearerToken;
    return token;
  }

  public get isAuthenticated(): boolean {
    return this.token !== null;
  }
}
