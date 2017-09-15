import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  buttons: string[] = ['Off', 'Off', 'Off', 'Off', 'Off', 'Off', 'Off', 'Off', 'Off', 'Off'];

  onClick(index){
    if(this.buttons[index]==='Off'){
      this.buttons[index] = 'On';
    } else if(this.buttons[index]==='On'){
      this.buttons[index] = 'Off'
    }
  }
  
}
