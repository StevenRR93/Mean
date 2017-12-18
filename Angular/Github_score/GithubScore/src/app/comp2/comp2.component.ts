import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  username: String[];
  score;
  exists;
  results: number[];
  errors = '';
  // Inject Data Service
  constructor(private _dataService: DataService) {
    this.username = this._dataService.username;
    this.score = this._dataService.score;
    this.exists = this._dataService.exists;
    this.results = this._dataService.results;
  }
  ngOnInit() {
    this.username = this._dataService.username;
    this.score = this._dataService.score;
    this.results = this._dataService.results;
    this.exists = this._dataService.exists;
  }

}
