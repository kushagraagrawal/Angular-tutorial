import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { NamesComponent } from './scenario1/names.component';
import { Scenario2Component } from './scenario2/scenario2.component';
//import { Scenario3Component } from './scenario3/scenario3.component';
//import { Scenario3 } from './scenario3.1/scenario3.1.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    Scenario2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
