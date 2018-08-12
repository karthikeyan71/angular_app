import { Component } from '@angular/core';
// import { $ } from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  open_menu()
  {
    $('.nav_style1').toggleClass("nav_style_overload");
  }


}
