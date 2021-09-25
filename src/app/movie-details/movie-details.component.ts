import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  durationFlag = false;
  revenueFlag = false;

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.movie = this.moviesService.getDetailedMovie();

    if (this.movie.runtime != null)
      this.durationFlag = true;
    
    if (this.movie.revenue != null)
      this.revenueFlag = true;

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
      case 'ja': {
        this.language = 'Japanese';
        break;
      }
      case 'ko': {
        this.language = 'Korean';
        break;
      }
      default: {
        this.language = this.movie.original_language;
        break;
      }
    }
  }

  onImageClick() {
    window.scrollTo(0,document.body.scrollHeight);
  }
}
