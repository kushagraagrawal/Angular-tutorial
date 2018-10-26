import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie';
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url: string = "http://localhost:8081/movie";

  constructor(private http: HttpClient) { }

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getMovies(): Observable<IMovie[]>{
    console.log(this.http.get<IMovie[]>(this._url));
    return this.http.get<IMovie[]>(this._url).pipe(catchError(err => {
      console.log(err.error);
      return throwError(err.error)
    }));
  }
}
