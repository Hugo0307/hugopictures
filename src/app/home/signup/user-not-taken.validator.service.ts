import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

import { SignupService } from './signup.service';

@Injectable({ providedIn: 'root' })
export class UserNotTakenValidatorService {

  constructor(private signupService: SignupService) { }

  /**
   * Método para verificar a preexistência de um userName informado pelo usuário
   * @returns uma função de validação retornando um objeto javascript true ou null
   */
  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges // o valueChanges vai retornar um primeiro Observable
        .pipe(debounceTime(300)) // vai capturar o valor se a digitação parar por 300ms
        .pipe(switchMap(userName => // usando o switchMap para trocar de emissão de Observable
          this.signupService.checkUserNameTaken(userName) // vai retornar true ou false
        ))
        .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null)) // usando o map para transformar o true ou false em um objeto javascrip ou null
        .pipe(first()); // para não ficar aberto escutando o tempo todo, após o debounce, vai pegar o primeiro valor
    }
  }
}
