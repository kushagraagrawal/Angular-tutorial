import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url: string = "http://localhost:8080/api/v1/movie";

  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMovie[]>{
    console.log(this.http.get<IMovie[]>(this._url));
    return this.http.get<IMovie[]>(this._url);
  }
}
