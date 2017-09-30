import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  players = [];

  constructor(private _userService: UserService, private _router: Router) { 
    
  }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(): void {
    this._userService.retrievePlayers().subscribe(players => this.players = players,
      console.error
    );
  }

  startBattle(){
    this._router.navigate(['results']);
  }

}
