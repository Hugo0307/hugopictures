import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'hp-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';


  constructor(
    private photoService: PhotoService,
    private activedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {

      this.userName = this.activedRoute.snapshot.params.userName;
      this.photos = this.activedRoute.snapshot.data['photos'];
      this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);

      /* >>> NOTA: Agora o resolver está carregando as photos antes mesmo de o componente ser carregado,
      então o código abaixo é desnecessário, porém, sem o resolver, ele seria usado. <<<

      const userName = this.activedRoute.snapshot.params.userName;//pegando a rota ativada no momento
      this.photoService
      .listFromUser(userName)//busca pelo usuário dinâmicamente
      .subscribe(photos => this.photos = photos);*/
    }

    /** Criei este método para resolver o problema de na tag html o target não conseguir obter o value */
    onKeyUp(evento: KeyboardEvent) {
      this.debounce.next((<HTMLInputElement>evento.target).value);
    }

    ngOnDestroy(): void {
      this.debounce.unsubscribe();
    }

    load() {
      this.photoService.listFromUserPaginated(this.userName, ++this.currentPage) //o pré-incremento é porque o resolver já carrega a primeira página, agora quero a segunda em diante
          .subscribe(photos => {
            this.photos = this.photos.concat(photos);
            if(!photos.length) this.hasMore = false;
          });

    }
  }
