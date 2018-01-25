//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of'

import { User } from '../../models/user.interface';
import { USER_LIST} from '../../mocks/user.mocks';
import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';
/*
  Generated class for the GitHubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubServiceProvider {

  constructor() {
    console.log('Hello GitHubServiceProvider Provider');
  }

  mockGetRepositoryInformation(username: string): Observable<Repository[]>
  {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }

  mockGetUserInformation(username: string): Observable<User>
  {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

}
