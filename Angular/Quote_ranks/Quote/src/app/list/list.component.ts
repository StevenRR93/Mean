import { Component, OnInit, Input, Output, EventEmitter, NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { Quote } from '../Quote';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() quotes;
  @Output() anEventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  upvoteit(num: number){
    for (var i = 0; i <this.quotes.length; i++){
      if (this.quotes[i].id === num){
        this.quotes[i].upvotes += 1;
      }
    }
    // for (var i = this.quotes.length-2; i >= 0; i--){
    //   if ((this.quotes[i-1].upvotes -this.quotes[i-1].downvotes) > (this.quotes[i].upvotes -this.quotes[i].downvotes)){
    //     var temp = this.quotes[i-1];
    //     this.quotes[i-1] = this.quotes[i];
    //     this.quotes[i] = temp;
    //   }
    // }
    this.anEventEmitter.emit(this.quotes);
  }
  downvoteit(num: number){
    for (var i = 0; i <this.quotes.length; i++){
      if (this.quotes[i].id === num){
        this.quotes[i].downvotes += 1;
      }
    }
    // for (var i = 1; i <this.quotes.length-1; i++){
    //   if ((this.quotes[i-1].upvotes -this.quotes[i-1].downvotes) > (this.quotes[i].upvotes -this.quotes[i].downvotes)){
    //     var temp = this.quotes[i-1];
    //     this.quotes[i-1] = this.quotes[i];
    //     this.quotes[i] = temp;
    //   }
    // }
    this.anEventEmitter.emit(this.quotes);
  }
  delete(num: number){
    for (var i = 0; i <this.quotes.length; i++){
      if (this.quotes[i].id === num){
        this.quotes.splice(i, 1);
      }
    }
    this.anEventEmitter.emit(this.quotes);
  }
}
