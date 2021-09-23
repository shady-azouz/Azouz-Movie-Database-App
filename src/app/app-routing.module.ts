import { TopMoviesComponent } from './top-movies/top-movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AuthGuard } from './aut-guard.service';

const routes: Routes = [
  { path: 'movies', canActivate: [AuthGuard], component: TopMoviesComponent },
  { path: 'details', canActivate: [AuthGuard], component: MovieDetailsComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
