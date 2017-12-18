import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  gold: number[];
  messages: String[];
  constructor(private _dataService: DataService) {
    this.gold = this._dataService.amount();
    this.messages = this._dataService.log();
   }
  
  ngOnInit() {
    this.gold = this._dataService.amount();
    this.messages = this._dataService.log();
  }
  farm(){
    this._dataService.farming();
    this.gold = this._dataService.amount();
  }
  cave(){
    this._dataService.caving();
    this.gold = this._dataService.amount();
  }
  casino(){
    this._dataService.gambling();
    this.gold = this._dataService.amount();
  }
  house(){
    this._dataService.looting();
    this.gold = this._dataService.amount();
  }
}
