import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from './../../photo/photo';

@Component({
  selector: 'ap-photos-layout',
  templateUrl: './photos-layout.component.html',
  styleUrls: ['./photos-layout.component.css']
})
export class PhotosLayoutComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes.photos)/** verificando se há a presença da propriedade da inbound property que sofreu a mudança */
        this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]) {
      const newRows = [];

      for(let i = 0; i < photos.length; i += 3) {
          newRows.push(photos.slice(i, i + 3));
      }
      return newRows;
  }

}
