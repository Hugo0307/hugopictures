import { Photo } from './../../photo/photo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-photos-layout',
  templateUrl: './photos-layout.component.html',
  styleUrls: ['./photos-layout.component.css']
})
export class PhotosLayoutComponent implements OnInit {

  @Input() photos: Photo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
