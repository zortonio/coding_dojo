import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit {

  user: Object;
  error;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getPlayer1();
  }

  getPlayer1(): void {
    this._userService.retrievePlayers().subscribe(players => this.user = players[0], console.error);
  }

  onSubmit(){
    this._userService.getUser(this.user, (user, err) => {
      if(err){
        this.error = err;
      } else{
        this.user = user;
        this.error = null;
        this._userService.setPlayer1(this.user);
        this.addPlayer(this.user);
      }
    });
  }

  addPlayer(user){
    this._userService.addPlayer(user);
  }
}
