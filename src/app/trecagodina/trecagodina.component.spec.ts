import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrecagodinaComponent } from './trecagodina.component';

describe('TrecagodinaComponent', () => {
  let component: TrecagodinaComponent;
  let fixture: ComponentFixture<TrecagodinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrecagodinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrecagodinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
