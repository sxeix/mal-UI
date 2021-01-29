import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeNameListComponent } from './anime-name-list.component';

describe('AnimeNameListComponent', () => {
  let component: AnimeNameListComponent;
  let fixture: ComponentFixture<AnimeNameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeNameListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeNameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
