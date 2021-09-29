import { MovieComponent } from './../movie/movie.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';

import { TopMoviesComponent } from './top-movies.component';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('TopMoviesComponent', () => {
  let component: TopMoviesComponent;
  let fixture: ComponentFixture<TopMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopMoviesComponent, MovieComponent],
      providers: [MoviesService],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMoviesComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create object', fakeAsync(() => {
    tick();
    expect(component).toBeTruthy();
  }));

  it(
    'should load a movie',
    fakeAsync(() => {
      let moviesService = fixture.debugElement.injector.get(MoviesService);
      let testMovie = {
        formattedReleaseDate: '',
        adult: false,
        backdrop_path: '/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
        budget: 63000000,
        genres: [
          {
            id: 18,
            name: 'Drama',
          },
        ],
        homepage: 'http://www.foxmovies.com/movies/fight-club',
        id: 550,
        imdb_id: 'tt0137523',
        original_language: 'en',
        original_title: 'Fight Club',
        overview:
          'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
        popularity: 49.011,
        poster_path: '/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg',
        production_companies: [
          {
            id: 508,
            logo_path: '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
            name: 'Regency Enterprises',
            origin_country: 'US',
          },
          {
            id: 711,
            logo_path: '/tEiIH5QesdheJmDAqQwvtN60727.png',
            name: 'Fox 2000 Pictures',
            origin_country: 'US',
          },
          {
            id: 20555,
            logo_path: '/hD8yEGUBlHOcfHYbujp71vD8gZp.png',
            name: 'Taurus Film',
            origin_country: 'DE',
          },
          {
            id: 54051,
            logo_path: '',
            name: 'Atman Entertainment',
            origin_country: '',
          },
          {
            id: 54052,
            logo_path: '',
            name: 'Knickerbocker Films',
            origin_country: 'US',
          },
          {
            id: 25,
            logo_path: '/qZCc1lty5FzX30aOCVRBLzaVmcp.png',
            name: '20th Century Fox',
            origin_country: 'US',
          },
          {
            id: 4700,
            logo_path: '/A32wmjrs9Psf4zw0uaixF0GXfxq.png',
            name: 'The Linson Company',
            origin_country: 'US',
          },
        ],
        production_countries: [
          {
            iso_3166_1: 'DE',
            name: 'Germany',
          },
          {
            iso_3166_1: 'US',
            name: 'United States of America',
          },
        ],
        release_date: '1999-10-15',
        revenue: 100853753,
        runtime: 139,
        spoken_languages: [
          {
            english_name: 'English',
            iso_639_1: 'en',
            name: 'English',
          },
        ],
        status: 'Released',
        tagline: 'Mischief. Mayhem. Soap.',
        title: 'Fight Club',
        video: false,
        vote_average: 8.4,
        vote_count: 22458,
      };
      // let spy = spyOn(moviesService, 'loadMovies').and.returnValue(
      //   of([testMovie])
      // );
      spyOn(moviesService,'loadMovies').and.returnValue(new Promise(() => {return [testMovie]}));
      fixture.detectChanges();
      tick();
      console.log(component.movies);
      // console.log(fixture.debugElement.nativeElement.querySelector('#testSelector').innerHTML);
      expect(component.movies).toEqual([]);
    })
  );
});
