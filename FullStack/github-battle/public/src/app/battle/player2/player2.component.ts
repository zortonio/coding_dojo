import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit {

  user: Object;
  error;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getPlayer2();
  }

  getPlayer2(): void {
    this._userService.retrievePlayers().subscribe(players => this.user = players[1], console.error);
  }

  onSubmit() {
    this._userService.getUser(this.user, (user, err) => {
      if (err) {
        this.error = err;
      } else {
        this.user = user;
        this.error = null;
        this._userService.setPlayer2(this.user);
        this.addPlayer(this.user);
      }
    });
  }

  addPlayer(user) {
    this._userService.addPlayer(user);
  }
}
