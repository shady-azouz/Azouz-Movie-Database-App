import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie.module';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie;
  language: string = "";

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movie = this.moviesService.getDetailedMovie();
    console.log(this.movie);
    switch(this.movie.original_language) {
      case 'en': {
        this.language = 'English';
        break;
      }
      case 'hi': {
        this.language = 'Hindi';
        break;
      }
      case 'ar': {
        this.language = 'Arabic';
        break;
      }
      default: {
        this.language = this.movie.original_language;
        break;
      }
    }
  }

}
