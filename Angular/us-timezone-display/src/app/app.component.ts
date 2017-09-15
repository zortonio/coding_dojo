import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Us Time Zone Display';
  switch: boolean = false;
  date: Date;
  selected_id: String;

  onClick(name){
    this.selected_id = name;
    let oldDate: Date = new Date();
    if(name==='PST'){
      this.date = oldDate;
    } else if(name==='MST'){
      this.date = new Date(oldDate.getTime()+60*60000);
    } else if(name==='CST'){
      this.date = new Date(oldDate.getTime()+120*60000);
    } else if(name==='EST'){
      this.date = new Date(oldDate.getTime()+180*60000);
    } else if(name==='Clear'){
      this.date = null;
    }
  }
}
