import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

import { TokenService } from './../token/token.service';
import { User } from './user';

/** Serviço para armazenar o token com auxílio do TokenService e retornar o usuário logado*/
@Injectable({ providedIn: 'root' })
export class UserService {

  /** O Behavior Subject vai pegar a informação do usuário e guardar até que alguém utilize a informação */
  private userSubject = new BehaviorSubject<User>({id:0,name:'',email:''});

  constructor(private tokenService: TokenService) {
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

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next({id:0,name:'',email:''});
  }
}
