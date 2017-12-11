import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  time: string = '';
  display: string = '';
  clicked: string = '';
  public now: Date = new Date();
  constructor() {
      setInterval(() => {
        this.now = new Date();
      }, 1);
  }

  PST(){
    this.display = 'LLL dd, yyyy, hh:mm:ss a';
    this.time = '-0500';
    this.clicked = 'PST';
  }

  MST(){
    this.display = 'LLL dd, yyyy, hh:mm:ss a';
    this.time = '-0600';
    this.clicked = 'MST';
  }

  CST(){
    this.display = 'LLL dd, yyyy, hh:mm:ss a';
    this.time = '-0700';
    this.clicked = 'CST';
  }

  EST(){
    this.display = 'LLL dd, yyyy, hh:mm:ss a';
    this.time = '-0800';
    this.clicked = 'EST';
  }

  clear(){
    this.display = '';
    this.time = '';
    this.clicked = 'clear';
  }
}
