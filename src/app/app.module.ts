import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginApp } from './login/login.component';
import { HomePage } from "./homePage/home.component";
import { NavBar } from "./navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginApp,
    HomePage,
    NavBar
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
