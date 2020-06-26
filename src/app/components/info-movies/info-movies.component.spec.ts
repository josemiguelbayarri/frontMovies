import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMoviesComponent } from './info-movies.component';

describe('InfoMoviesComponent', () => {
  let component: InfoMoviesComponent;
  let fixture: ComponentFixture<InfoMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
