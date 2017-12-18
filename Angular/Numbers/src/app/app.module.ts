import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { Seq1Component } from './seq1/seq1.component';
import { Seq2Component } from './seq2/seq2.component';
import { DifComponent } from './dif/dif.component';


@NgModule({
  declarations: [
    AppComponent,
    Seq1Component,
    Seq2Component,
    DifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
