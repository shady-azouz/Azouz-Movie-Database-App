import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from './movie/movie.module';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  loadedMovies: Movie[] = [];
  isLoading = false;
  error: any;

  constructor(private http: HttpClient) { }

  loadMovies(url: string, apiKey: string) {
    this.isLoading = true;
    this.http.get<any>(url, {
      params: new HttpParams().set('api_key', apiKey)
    }).subscribe(
      response => {
        console.log(response);
        this.loadedMovies = response['response'];
      },
      (error) => {
        console.log("Error retrieving movies from api: " + error);
      }
    );
    return this.loadedMovies;
  }
}
