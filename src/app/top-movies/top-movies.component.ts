import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../shared/models/movie.module';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit {
  loading = true;
  currentPage = 1;
  movies: Movie[] = [];
  userName = localStorage.getItem('name');

  constructor(private moviesService: MoviesService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.currentPage = this.moviesService.getCurrentPage();
    this.loadMovies();
  }

  loadMovies() {
    this.loading = true;
    // this.moviesService.loadMovies().subscribe(
    //   response => {
    //     console.log(response);
    //     this.movies = response['results'];
    //     console.log("size of Movies list: " + this.movies.length);
    //   },
    //   (error) => {
    //     console.log("Error retrieving movies from api: " + error);
    //   }
    // );
    this.moviesService.loadMovies().then(movies => {
      this.movies =  movies;
      // console.log(this.movies);
      this.loading = true;
    });
  }

  onPreviousPage() {
    if(this.currentPage > 1){
      this.moviesService.setCurrentPage(--this.currentPage);
      this.loadMovies();
      window.scroll(0,0);
    }
  }

  onNextPage() {
    this.moviesService.setCurrentPage(++this.currentPage);
    this.loadMovies();
    window.scroll(0,0);
  }

  onGoToTop() {
    window.scrollTo(0,0);
  }

}
