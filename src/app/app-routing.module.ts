import { TopMoviesComponent } from './top-movies/top-movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: 'movies', component: TopMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
