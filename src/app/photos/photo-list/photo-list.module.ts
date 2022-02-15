import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule } from './../../shared/components/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosLayoutComponent } from './photos-layout/photos-layout.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosLayoutComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent
  ],
  imports: [
    PhotoModule,
    CardModule,
    CommonModule
  ]
})
export class PhotoListModule { }
