import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'hp-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit{

  photos: Photo[] = [];
  filter: string = '';
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

      /* >>> NOTA: Agora o resolver está carregando as photos antes mesmo de o componente ser carregado,
      então o código abaixo é desnecessário, porém, sem o resolver, ele seria usado. <<<

      const userName = this.activedRoute.snapshot.params.userName;//pegando a rota ativada no momento
      this.photoService.listFromUser(userName)//busca pelo usuário dinâmicamente
        .subscribe(photos => this.photos = photos);*/
    }
    /** Evento que gerencia o funcionamento do botão Load more */
    load() {
      this.photoService.listFromUserPaginated(this.userName, ++this.currentPage) //o pré-incremento é porque o resolver já carrega a primeira página, agora quero a segunda em diante
          .subscribe(photos => {
            this.filter = '';//caso não tenha mais o que exibir com o filtro ao clicar em Load more, exibirá todas as fotos
            this.photos = this.photos.concat(photos);
            if(!photos.length) this.hasMore = false;
          });

    }
  }
