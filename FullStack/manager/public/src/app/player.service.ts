import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }

  players = [];

  createPlayer(player) {
    return this._http.post('/players/new', player).subscribe(
      (response) => {
        console.log('Successfully added a new player!');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  retrievePlayers(callback) {
    return this._http.get('/players/all').subscribe(
      (response) => {
        console.log('Successfully retrievd players!')
        this.players = response.json();
        callback(this.players);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deletePlayer(id) {
    return this._http.delete('/players/' + id).subscribe(
      (response) => {
        console.log('Successfully deleted player!');
      },
      (err) => {
        console.log(err);
      }
    )
  }

  setGameStatus(id, game, status){
    return this._http.put('/players/game/status/'+id, {game: game, status: status}).subscribe(
      (response) => {
        console.log('Successfully set game status!');
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
