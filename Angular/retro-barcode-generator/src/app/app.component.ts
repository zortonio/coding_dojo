import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';

  num = function(){
    return Math.floor(Math.random() * this.colors.length);
  }
  
  colors = ['AliceBlue', 'Aquamarine', 'Blue', 'DarkGreen', 'DarkSlateBlue', 'Gold', 'HotPink', 'Khaki', 'Olive', 'Peru', 'Navy', 'SeaGreen', 'Sienna', 'SkyBlue', 'Silver', 'Purple'];

}
