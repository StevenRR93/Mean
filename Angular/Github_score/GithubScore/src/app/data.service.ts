import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  username: String[];
  score: number[];
  exists: boolean = false;
  results: number[] = []
  errors = '';
  userinfo;
  constructor(private http: Http) {
    this.username = [];
    this.score = [];
    this.score.push(0);
    this.userinfo = "";
  }
  
  retrieveScore(): number[]  {
    this.results[0] = null;
    this.http.get('https://api.github.com/users/'+this.username[0]).map(response => response.json()).toPromise()
    .then( (data) => {
      this.score[0] = data.followers + data.public_repos;
      this.results[0] = data;
    })
    .catch(errors => {
      this.errors = errors;
      this.exists = false;
    });
    return this.results;
  }
}
