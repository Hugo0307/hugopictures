import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:3000';

/**
 * Serviço que realizará chamada ao backend para consultar se o nome do usuário já existe
 */
@Injectable({ providedIn: 'root' })
export class SignupService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string) {
    return this.http.get(API_URL + '/user/exists/' + userName);
  }
}
