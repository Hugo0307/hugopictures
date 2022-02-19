import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Classe responsável por detectar se a execução está sendo no navegador ou server side
 * @returns true se for no navegador.
 * */
@Injectable({ providedIn: 'root' })
export class PlatformDetectorService {

  constructor(@Inject(PLATFORM_ID) private platformId: string) { }

  isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
