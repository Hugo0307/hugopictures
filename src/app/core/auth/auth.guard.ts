import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from './../user/user.service';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private route: Router) { }

  /**
   * Guarda de rota para que se o usuário estiver logado e tentar acessar a página de login via url,
   *  seja redirecionado para sua dashboard de fotos.
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    if(this.userService.isLogged()) {
      this.route.navigate(['user', this.userService.getUserName()]);
      return false;
    }
    return true;
  }

}
