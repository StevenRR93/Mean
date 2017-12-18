import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dif',
  templateUrl: './dif.component.html',
  styleUrls: ['./dif.component.css']
})
export class DifComponent implements OnInit {
  difference: number;
  listOne: number[];
  listTwo: number[];
   
  constructor(private _dataService: DataService) {
    this.difference = 0;
   }

  ngOnInit() {
    this.listOne = this._dataService.retrieveSeqOne();
    this.listTwo = this._dataService.retrieveSeqTwo();
  }

  compute(){
    var sum = 0;
    for (var i in this._dataService.listOne){
      sum += this._dataService.listOne[i];
    }
    var sub = 0;
    for (var i in this._dataService.listTwo){
      sub += this._dataService.listTwo[i];
    }
    this.difference = Number(Math.round((sum-sub)*100)/100);
  }

}
