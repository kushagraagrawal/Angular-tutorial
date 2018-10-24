import { Component, OnInit, Input } from '@angular/core';
import { names } from '../names';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('alias') hero: names;

  constructor() { }

  ngOnInit() {
  }
}
