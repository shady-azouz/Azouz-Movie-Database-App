import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie/movie.module';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit {
  currentPage = 1;
  movies: Movie[] = [];
  isLoading: boolean = false;

  constructor(private moviesService: MoviesService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadMovies(1);
  }

  loadMovies(pageNumber: number) {
    this.isLoading = true;
    this.http.get<any>('https://api.themoviedb.org/3/movie/top_rated', {
      params: new HttpParams().set('api_key', '1d4f34b314b06846ce7f1944325767ba').set('page',pageNumber),
    }).subscribe(
      response => {
        console.log(response);
        this.movies = response['results'];
        console.log("size of Movies list: " + this.movies.length);
      },
      (error) => {
        console.log("Error retrieving movies from api: " + error);
      }
    );
  }

  onClick() {
    this.router.navigate(['/home']);
  }

  onPreviousPage() {
    if(this.currentPage > 1)
      this.loadMovies(--this.currentPage);
  }

  onNextPage() {
    this.loadMovies(++this.currentPage);
  }

}
