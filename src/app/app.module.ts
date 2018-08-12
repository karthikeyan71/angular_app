import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { $ } from 'jquery';


import { AppComponent } from './app.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { ViewerComponent } from './viewer/viewer.component';

const Paths = [
  {
    path:"apps", component: ViewerComponent
  },
  {
    path:"apper1", component: PuzzleComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PuzzleComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
