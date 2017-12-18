import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-seq2',
  templateUrl: './seq2.component.html',
  styleUrls: ['./seq2.component.css']
})
export class Seq2Component implements OnInit {

  listTwo: number[];
  
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.listTwo = this._dataService.retrieveSeqTwo();
  }

  addToList(){
    this._dataService.addSeqTwo(Math.floor(Math.random() * 100/10));
  }

}
