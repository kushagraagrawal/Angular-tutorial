
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
selector: 'app-grandparent',
templateUrl: './grandparent.component.html',
styleUrls: ['./grandparent.component.css']
})
export class GrandparentComponent implements OnInit {

constructor(private data: DataService) { }

  message;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

}
