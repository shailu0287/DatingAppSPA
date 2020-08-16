import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL='https://localhost:44392/api/auth/';
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient) { }
  decodedToken: any;
  login (model: any) {
    return this.http.post(this.baseURL + 'GetUser', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'))
        }
      })
    );
  }
  register (model: any)
  {

    return this.http.post(this.baseURL + 'AddUser', model)
  }
  loggedIn ()
  {
    return !this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
  }
}
