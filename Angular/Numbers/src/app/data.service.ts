import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  listOne: number[] = [];
  listTwo: number[] = [];

  retrieveSeqOne(): number[] {
    return this.listOne;
  }
  retrieveSeqTwo(): number[] {
    return this.listTwo;
  }
  addSeqOne(num: number){
    this.listOne.push(num);
  }
  addSeqTwo(num: number){
    this.listTwo.push(num);
  }
}
