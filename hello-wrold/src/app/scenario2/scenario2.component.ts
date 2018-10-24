import { Component, OnInit } from '@angular/core';
import { names } from '../names';

@Component({
  selector: 'app-scenario2',
  templateUrl: './scenario2.component.html',
  styleUrls: ['./scenario2.component.css']
})
export class Scenario2Component implements OnInit {

  firstuser: names = {
    id: 1,
    name: 'xyz'
  }

  constructor() { }

  ngOnInit() {
  }

}
