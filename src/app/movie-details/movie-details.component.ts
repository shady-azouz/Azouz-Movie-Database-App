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

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movie = this.moviesService.getDetailedMovie();
  }

}
