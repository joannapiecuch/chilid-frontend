import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserInterface} from '../model/user.interface';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  basicUrl = '/assets/data/user.json';

  constructor(private httpService: HttpClient) {
  }

  getUser(): Observable<UserInterface> {
    return this.httpService.get<UserInterface>(this.basicUrl);
  }
}
