import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  archivedPlayers = [];
  players: Object[] = [{},{}];

  constructor(private _http: Http) { }

  getUser(user, callback){
    this._http.get('https://api.github.com/users/'+user.name).subscribe(
      (response) => {
        callback(response.json(),null);
      },
      (err) => {
        callback(null, err);
      }
    )
  }

  setPlayer1(user){
    this.players[0] = user;
  }

  setPlayer2(user){
    this.players[1] = user;
  }

  retrievePlayers(): Observable<Object[]>{
    return new Observable(subscriber => subscriber.next(this.players));
  }

  reset(){
    this.players = [{},{}];
  }

  addPlayer(user){
   this._http.post('/players/add',user).subscribe(
     (response) => {
       console.log(response);
     },
     (err) => {
      console.log(err);
    }
   );
  }

  getPlayers(callback){
    this._http.get('/players/all').subscribe(
      (response) => {
        this.archivedPlayers = response.json()
        callback(this.archivedPlayers);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
