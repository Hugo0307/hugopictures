import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { UserService } from './../user/user.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
    ) { }

  /** Método que realiza a comunicação com a api do backend afim de validar os dados do usuário para login */
  authenticate(userName: string, password: string) {
    return this.http.post(API_URL + '/user/login', { userName, password }, { observe: 'response' })//a propridade observe deixa a resposta visível
    .pipe(tap(resp => {
      const authToken: any = resp.headers.get('x-access-token');//pegando o token no cabeçalho
      this.userService.setToken(authToken);
    }))
  }
}
