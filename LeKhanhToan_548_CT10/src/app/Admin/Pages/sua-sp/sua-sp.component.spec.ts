import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaSpComponent } from './sua-sp.component';

describe('SuaSpComponent', () => {
  let component: SuaSpComponent;
  let fixture: ComponentFixture<SuaSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
