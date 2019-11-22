import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetail } from './movie-detail.model';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {

  URL_API: string = 'http://localhost:5877/api/MovieDetails';

  constructor(private http: HttpClient) { }

  get(): Observable<MovieDetail[]> {
    return this.http.get<MovieDetail[]>(`${this.URL_API}`);
  }

  getById(id: number): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.URL_API}/${id}`);
  }

  post(movie: MovieDetail): Observable<any> {
    return this.http.post(`${this.URL_API}`, movie);
  }
}