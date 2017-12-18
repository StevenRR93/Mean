import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  gold: number[] = this._dataService.amount();
  messages: String[] = [];
  constructor(private _dataService: DataService) { 
    this.gold = this._dataService.amount();
    this.messages = this._dataService.log();
  }
  
  ngOnInit() {
    this.gold = this._dataService.amount();
    this.messages = this._dataService.log();
  }

}
