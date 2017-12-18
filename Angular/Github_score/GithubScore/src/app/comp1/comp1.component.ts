import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  username: String[];
  score;
  exists;
  results: number[];
  errors = '';
  // Inject Data Service
  constructor(private _dataService: DataService) {
    this.username = null;
    this.score = 0;
    this.exists = null;
    this.results = [];
  }
  ngOnInit() {
    this.username = this._dataService.username;
  }
  retrieveScore(){
    this.results = this._dataService.retrieveScore();
    if (this._dataService.username.length < 1){
      this._dataService.username.push("");
    }
  }
  
}
