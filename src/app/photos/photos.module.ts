import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoListResolver } from './photo-list/photo-list.resolver';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosLayoutComponent } from './photo-list/photos-layout/photos-layout.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { PhotoListModule } from './photo-list/photo-list.module';


@NgModule({
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    HttpClientModule,
    CommonModule,
  ]
})

export class PhotosModule {}
