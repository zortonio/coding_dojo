import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  players = [];
  gameId = 'game1';
  

  constructor(private _playerService: PlayerService, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => { this.gameId = 'game'+params.get('id')});
    this.getPlayers();
  }

  ngOnInit() {
  }

  getPlayers() {
    this._playerService.retrievePlayers((players) => {
      this.players = players;
    })
  }

  setStatus(id, game, status){
    this._playerService.setGameStatus(id, game, status);
    this.getPlayers();
  }

}
