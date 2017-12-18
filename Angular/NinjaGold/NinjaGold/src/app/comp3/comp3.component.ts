import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  gold: number[];
  messages: String[];
  constructor(private _dataService: DataService) {
    this.messages = this._dataService.log();
    this.gold = this._dataService.amount();
   }
  
  ngOnInit() {
    this.gold = this._dataService.amount();
    this.messages = this._dataService.log();
  }
}
