import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeStatusDropdownComponent } from './anime-status-dropdown.component';

describe('AnimeStatusDropdownComponent', () => {
  let component: AnimeStatusDropdownComponent;
  let fixture: ComponentFixture<AnimeStatusDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeStatusDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeStatusDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
