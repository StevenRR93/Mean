import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = "Retro Barcode Generator";
  num: Number = 10;
  variable: String = "Black";
  colorscheme: String[] = ["AliceBlue", 
  "AntiqueWhite", 
  "Aqua", 
  "Aquamarine", 
  "Azure ", 
  "Beige " , 
  "Bisque", 
  "Black", 
  "BlanchedAlmond", 
  "Blue", 
  "BlueViolet", 
  "Brown", 
  "BurlyWood", 
  "CadetBlue", 
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson"];
  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }
  rand(){
    return (Math.floor(Math.random()*20));
  }
}