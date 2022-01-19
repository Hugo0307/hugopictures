import { Component } from '@angular/core';

import { PhotoComponent } from './photos/photo/photo.component';
import { PhotoService } from './photos/photo/photo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: PhotoComponent[] = [];

  constructor(photoService:PhotoService) {
    photoService.listFromUser('flavio')
    .subscribe(photos => this.photos = photos);
  }
 }
