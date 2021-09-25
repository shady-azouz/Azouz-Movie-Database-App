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
  releaseDate = "";
  

  constructor(private router: Router, private moviesService: MoviesService) { }

  ngOnInit(): void {
    console.log("i'm in the movie component")
    var splitString = this.movie.release_date.split("-");
    this.releaseDate = splitString[2]+"-"+splitString[1]+"-"+splitString[0];
  }

  onClick() {
    this.moviesService.setDetailedMovie(this.movie);
    this.router.navigate(['/details']);
  }

}
