import { AbstractControl } from '@angular/forms';

/**
 * Função para validar uso de caixa baixa/alta
 * @param control
 */
export function lowerCaseValidator(control: AbstractControl) {

  if(control.value.trim() && !/^[a-z]+[0-9]*$/.test(control.value)) {
    return { lowerCase: true};
  }
  return false;
}
