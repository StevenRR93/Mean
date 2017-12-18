import { Component } from '@angular/core';
import { DataService } from './data.service';
import { exists } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Score';
  username: String[];
  score: Number[];
  exists: Boolean;
  results: number[];
  errors = '';
  constructor(private _dataService: DataService) {
    this.username = this._dataService.username;
    this.score = this._dataService.score;
    this.exists = this._dataService.exists;
    this.results = this._dataService.results;
  }
  ngOnInit() {
    this.username = this._dataService.username;
    this.score = this._dataService.score;
    this.exists = this._dataService.exists;
    this.results = this._dataService.results;
  }
}

