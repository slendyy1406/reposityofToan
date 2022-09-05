import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlydonhangComponent } from './qlydonhang.component';

describe('QlydonhangComponent', () => {
  let component: QlydonhangComponent;
  let fixture: ComponentFixture<QlydonhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlydonhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QlydonhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
