import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Switchboard';
  num: Number = 10;
  clicked: boolean[] = [];
  a: number = 0;
  index: number = 0;
  on: string = "On";
  off: string = "Off";
  many: number[] = [];
  constructor() {
    for(this.a; this.a < this.num; this.a++){
      this.many.push(this.a);
      this.clicked.push(true);
    }
  }

  selected(i){
      if(this.clicked[i] == false){
      this.clicked[i]=true;
    }
    else {
      this.clicked[i] = false;
    }
}
}
