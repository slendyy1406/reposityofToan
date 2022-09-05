import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlysanphamComponent } from './qlysanpham.component';

describe('QlysanphamComponent', () => {
  let component: QlysanphamComponent;
  let fixture: ComponentFixture<QlysanphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlysanphamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QlysanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
