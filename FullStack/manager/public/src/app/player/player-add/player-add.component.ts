import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {

  player = { name: '', position: '' };

  constructor(private _playerService: PlayerService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._playerService.createPlayer(this.player);
    this.goToList();
  }

  goToList() {
    this._router.navigate(['']);
  }

}
