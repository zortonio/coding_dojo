import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

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

  deleteClick(id, name) {
    alert(`Are you sure you want to delete ${name}?`);
    this._playerService.deletePlayer(id);
    this.getPlayers();
  }

}
