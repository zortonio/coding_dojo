import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  @Input() quote;
  quotes = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.quotes.push(this.quote);
  }

}
