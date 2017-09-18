import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-quote-add',
  templateUrl: './quote-add.component.html',
  styleUrls: ['./quote-add.component.css']
})
export class QuoteAddComponent implements OnInit {

  quote = {
    text: '',
    author: ''
  }

  @Output() quoteEmitter = new EventEmitter(); 

  addQuote(){
    this.quoteEmitter.emit(this.quote);
    this.quote = {
      text: '',
      author: ''
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
