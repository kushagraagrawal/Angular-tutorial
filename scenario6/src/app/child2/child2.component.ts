import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
selector: 'app-child2',
templateUrl: './child2.component.html',
styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

constructor(private data: DataService) { }

  message='';

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
