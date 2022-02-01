import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosLayoutComponent } from './photos-layout.component';

describe('PhotosLayoutComponent', () => {
  let component: PhotosLayoutComponent;
  let fixture: ComponentFixture<PhotosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
