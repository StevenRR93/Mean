import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  gold: number[] = [];
  messages: String[];
  constructor() { 
    this.gold.push(0);
    this.messages = [];
   }
  
    amount(): number[] {
      return this.gold;
    }
    
    log(): String[]{
      return this.messages;
    }
    farming() {
      var temp = Math.floor(Math.random() * 4) + 2;
      this.gold[0] += temp;
      this.messages.push("You've earned "+ String(temp)+" gold at the Farm");
    }
    caving() {
      var temp = Math.floor(Math.random() * 6) + 5;
      this.gold[0] += temp;
      this.messages.push("You've earned "+ String(temp)+" gold at the Cave");
    }
    gambling(){
      if (this.gold[0] > 100){
        var temp = Math.floor(Math.random() * 201) - 100;
        this.gold[0] += temp;
        if (this.gold[0] < 0){
          this.gold[0] = 0;
        }
        if (temp >= 0){
          this.messages.push("You've earned "+ String(temp)+" gold at the Casino");
        }
        else{
          this.messages.push("You've lost "+ String(Math.abs(temp))+" gold at the Casino");
        }
      }
      else{
        this.messages.push("You don't have enough money to gamble. (100 gold minimum)");
      }
      
    }
    looting(){
      var temp = Math.floor(Math.random() * 6) + 10;
      this.gold[0] += temp;
      this.messages.push("You've earned "+ String(temp)+" gold at the House");
    }
    reset(){
      this.gold[0] = 0;
      this.messages = [];
    }
}
