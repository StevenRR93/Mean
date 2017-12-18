import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-seq1',
  templateUrl: './seq1.component.html',
  styleUrls: ['./seq1.component.css']
})
export class Seq1Component implements OnInit {

  listOne: number[];
  
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.listOne = this._dataService.retrieveSeqOne();
  }

  addToList(){
    this._dataService.addSeqOne(Math.floor(Math.random() * 100)/10);
  }
}
