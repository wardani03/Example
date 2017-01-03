import {Component} from '@angular/core';

import {RegisterService} from "./service/Register.service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RegisterService]
})

export class AppComponent {
  title = 'Welcome Angular JS 2! Mari Semangat Belajar Bro....';
}
