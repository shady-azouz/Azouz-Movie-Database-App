import { TopMoviesComponent } from './top-movies/top-movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: 'movies', component: TopMoviesComponent },
  { path: 'details', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
