import { Component, OnInit } from '@angular/core';
import { names } from '../names';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  firstuser: names = {
    id: 1,
    name: 'xyz'
  }
  constructor() { }

  ngOnInit() {
  }
  onClick(user: names){
    console.log(user.name);

  }


}
