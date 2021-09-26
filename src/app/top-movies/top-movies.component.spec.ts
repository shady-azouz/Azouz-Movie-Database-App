import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';

import { TopMoviesComponent } from './top-movies.component';

import {HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('TopMoviesComponent', () => {
  let component: TopMoviesComponent;
  let fixture: ComponentFixture<TopMoviesComponent>;
  let service: MoviesService;
  let router: Router;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMoviesComponent ],
      imports: [HttpClientModule],
      providers: [MoviesService, Router]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('sould create', () => {
  //   expect(fixture).toBeTruthy();
  // })
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
