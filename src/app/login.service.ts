import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  accounts = [{name: 'Shady Azouz', email: 'shady.azouz@gmail.com', password: 'dummyPassword'}]

  constructor() { }

  validateLoginAttempt(email: string, password: string) {
    var valid = false;
    for(var account of this.accounts) {
      if (account.email == email && account.password == password){
        valid = true;
        break;
      }
    }
    return valid;
  }

  signUp(name: string, email: string, password: string) {
    this.accounts.push({name: name, email: email, password: password});
  }
}
