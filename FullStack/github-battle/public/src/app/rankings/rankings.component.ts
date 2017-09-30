import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  players = []

  constructor(private _userService: UserService) {
    this._userService.getPlayers((players) => {
      this.players = players;
    })
  }

  ngOnInit() {
    
  }

}
