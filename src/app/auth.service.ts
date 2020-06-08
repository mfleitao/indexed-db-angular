import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private helper: JwtHelperService) { }

  getToken(): string {
    return localStorage.getItem('access-token');
  }

  readToken(): any {
    const token = localStorage.getItem('access-token');
    return this.helper.decodeToken(token);
  }

}
