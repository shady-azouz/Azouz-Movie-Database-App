import { MoviesService } from './shared/services/movies.service';
import { AuthGuard } from './shared/aut-guard/aut-guard.service';
import { LoginService } from './shared/services/login.service';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopMoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [MoviesService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
