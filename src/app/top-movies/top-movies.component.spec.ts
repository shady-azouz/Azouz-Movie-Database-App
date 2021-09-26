import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';

import { TopMoviesComponent } from './top-movies.component';

import {HttpTestingController} from '@angular/common/http/testing';

describe('TopMoviesComponent', () => {
  let component: TopMoviesComponent;
  let fixture: ComponentFixture<TopMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sould get current page from moviesService', () => {
    expect(component).toBeTruthy();
  });

  // it('should create top movies component', async(() => {
  //   let spy = spyOn(TopMoviesComponent, 'loadMovies').and.returnValue();
  //   expect(component).toBeTruthy();
  // }));
});
