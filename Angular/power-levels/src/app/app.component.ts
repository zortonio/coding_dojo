import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Power Levels';
  user = {level: 1}
  human: number;
  saiyan: number;
  superSaiyan: number;
  superSaiyanTwo: number;
  superSaiyanThree: number;
  superSaiyanFour: number;

  calculate(){
    this.human = this.user.level;
    this.saiyan = this.user.level * 10;
    this.superSaiyan = this.user.level * 90;
    this.superSaiyanTwo = this.user.level * 150;
    this.superSaiyanThree = this.user.level * 250;
    this.superSaiyanFour = this.user.level * 500;
  }
}
