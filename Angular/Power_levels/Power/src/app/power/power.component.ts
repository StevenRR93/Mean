import { Component, OnInit, Input, Output, EventEmitter, NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ PowerComponent, PowerComponent ],
  //providers: [ PowerService ],
  bootstrap: [ PowerComponent ]
})
export class PowerComponent implements OnInit {
  @Output() powerEvent = new EventEmitter();
  @Input() powerlevel: Number = 0;
  logdata = "";
  constructor() {
    
   }
  ngOnInit() {
    
  }
  PowerChange(param){
    this.powerlevel = param.value.pl;
  }
  
}
