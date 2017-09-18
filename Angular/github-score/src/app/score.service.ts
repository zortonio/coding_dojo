import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ScoreService {

  constructor(private _http: Http) { }

  user;

  getUser(user, callback){
    this._http.get('https://api.github.com/users/'+user.username).subscribe(
      (response) => {
        this.user = response.json();
        callback(this.user, null);
      },
      (err) => {
        callback(null, err);
      }
    );
  };
}
