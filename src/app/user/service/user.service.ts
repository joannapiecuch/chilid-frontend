import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {UserInterface} from '../model/user.interface';


@Injectable()
export class UserService {
  basicUrl = '/assets/data/user.json';

  constructor(private httpService: HttpClient) {
  }

  getUser(): Observable<UserInterface> {
    return this.httpService.get<UserInterface>(this.basicUrl);
  }
}
