import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from './movie.module';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie!: Movie;
  

  constructor(private router: Router, private moviesService: MoviesService) { }

  ngOnInit(): void {
    console.log("i'm in the movie component")
  }

  onClick() {
    this.moviesService.setDetailedMovie(this.movie);
    this.router.navigate(['/details']);
  }

}
