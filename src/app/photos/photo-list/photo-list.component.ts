import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.service';


@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: any[] = [];

  constructor(
    private photoService:PhotoService,
    private activedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const userName = this.activedRoute.snapshot.params.userName;//pegando a rota ativada no momento
    this.photoService
    .listFromUser(userName)//busca pelo usuário dinâmicamente
    .subscribe(photos => this.photos = photos);
  }
}
