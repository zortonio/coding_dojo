import { Component, OnInit } from '@angular/core';
import { ScoreService } from './../score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  user = {username: '', public_repos: 0, followers: 0};
  error;
  score = 0;

  constructor(private _scoreService: ScoreService) { }

  onSubmit(){
    this._scoreService.getUser(this.user, (user, err) => {
      if(err){
        this.error = err;
      } else{
        this.user = user;
        this.error = null;
        this.score = Number(this.user.public_repos) + Number(this.user.followers);
      }
    })
  }

  ngOnInit() {
  }

}
