import { Component, OnInit, Input, Output, EventEmitter, NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { PowerComponent } from './power/power.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Power Levels';
}
@NgModule({
	imports: [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, PowerComponent ],
	//providers: [ PowerService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }