import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  public movies = [];
  public movie = "what's up";

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getMovies()
        .subscribe(data => this.movies = data);
  }

}
