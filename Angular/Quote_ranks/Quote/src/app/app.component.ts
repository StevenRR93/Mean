import { Component, OnInit, Input, Output, EventEmitter, NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { Quote } from './Quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() quotes: Quote[];
  @Input() quotetracker;
  @Input() powerlevel: Number;
  title = 'Quote Ranks';
  quote = new Quote();
  newquote;
  constructor(){
    this.quotes = [];
    this.newquote = new Quote();
    this.quotetracker = 1;
  }
  something(eventData){
    this.quotes = eventData;
  }
  ngOnInit() {
  }
  QuoteSubmit(model: Quote, isValid: boolean){
    this.quote.id = this.quotetracker;
    this.quotetracker += 1;
    this.quote.upvotes = 0;
    this.quote.downvotes = 0;
    this.newquote = this.quote;
    this.quotes.push(this.newquote);
    this.quote = new Quote();
  }
}
