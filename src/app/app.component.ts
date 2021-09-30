import { Component } from '@angular/core';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent{
  title = 'Azouz-Movie-Database-App';

  isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
  }
}
