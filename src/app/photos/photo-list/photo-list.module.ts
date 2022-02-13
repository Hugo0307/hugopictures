import { PhotoModule } from './../photo/photo.module';
import { PhotoComponent } from './../photo/photo.component';
import { PhotoListComponent } from './photo-list.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosLayoutComponent } from './photos-layout/photos-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosModule } from '../photos.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosLayoutComponent,
    LoadButtonComponent,
    FilterByDescription
  ],
  imports: [
    PhotoModule,
    CommonModule
  ]
})
export class PhotoListModule { }
