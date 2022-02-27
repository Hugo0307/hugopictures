import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { TokenService } from './../token/token.service';
import jwt_decode from 'jwt-decode';
import { User } from './user';

/** Serviço para armazenar o token com auxílio do TokenService e retornar o usuário logado*/
@Injectable({ providedIn: 'root' })
export class UserService implements OnInit {

  private userSubject = new Subject<User>();

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.tokenService.hasToken() &&
      this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }
}
