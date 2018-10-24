import { Component, OnInit } from '@angular/core';
import { names } from '../names';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
firstuser: names = {
id: 1,
name: 'xyz'
}
  selectedName: names
  constructor(){ }

  ngOnInit() {
  }

  selectName(name: names){ this.selectedName = name;  }

}
