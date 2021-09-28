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
  detailedMovie!: Movie;
  currentPage = 1;

  constructor(private http: HttpClient) { }

  loadMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/top_rated', {
      params: new HttpParams().set('api_key', '1d4f34b314b06846ce7f1944325767ba').set('page',this.currentPage),
    });
  }

  getDetailedMovie() {
    return this.detailedMovie;
  }

  setDetailedMovie(movie: Movie) {
    this.detailedMovie = movie;
  }

  getCurrentPage() {
    return this.currentPage
  }

  setCurrentPage(currentPage: number) {
    this.currentPage = currentPage;
    console.log('Current Page: '+this.currentPage);
  }

  incrementCurrentPage() {
    this.currentPage ++;
    console.log('Current Page: '+this.currentPage);
  }

  decrementCurrentPage() {
    this.currentPage --;
    console.log('Current Page: '+this.currentPage);
  }
}
