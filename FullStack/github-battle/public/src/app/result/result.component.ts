import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  players: Object[] = [];
  player1: Object = {name: '', avatar_url: '', score: 0} ;
  player2;
  winner;
  loser;

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(){
    this._userService.retrievePlayers().subscribe(players => this.players = players, console.error);
    this.player1 = this.players[0]
    this.player2 = this.players[1];
    this.calculateScore();
  }

  calculateScore(){
    this.player1['score'] = (Number(this.player1['public_repos']) + Number(this.player1['followers']))*12;
    this.player2['score'] = (Number(this.player2['public_repos']) + Number(this.player2['followers'])) * 12;
    this.calculateWinner();
  }
  calculateWinner(){
    if(this.player1['score'] > this.player2['score']){
      this.winner = this.player1;
      this.loser = this.player2;
    } else{
      this.winner = this.player2;
      this.loser = this.player1;
    }
  }

  reset(){
    this._userService.reset();
    this._router.navigate(['']);
  }

}
