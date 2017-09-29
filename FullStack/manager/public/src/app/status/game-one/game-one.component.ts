import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../player.service';

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent implements OnInit {

  players = [];

  constructor(private _playerService: PlayerService) {
    this.getPlayers();
  }

  ngOnInit() {
  }

  getPlayers() {
    this._playerService.retrievePlayers((players) => {
      this.players = players;
    })
  }
}
