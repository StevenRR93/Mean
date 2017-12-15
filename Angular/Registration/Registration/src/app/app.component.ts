import { Component } from '@angular/core';
import { User } from './user';
import { NgModule } from '@angular/core'; 
import { NgForm } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title: string = "Registration";
  user = new User();
  users: User[] = [];
  person: User;
  constructor(){
  }
  onSubmit(model: User, isValid: boolean){
    this.person = this.user;
    this.users.push(this.user);

  }
}