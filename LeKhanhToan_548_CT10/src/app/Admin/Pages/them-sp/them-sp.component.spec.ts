import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSPComponent } from './them-sp.component';

describe('ThemSPComponent', () => {
  let component: ThemSPComponent;
  let fixture: ComponentFixture<ThemSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
