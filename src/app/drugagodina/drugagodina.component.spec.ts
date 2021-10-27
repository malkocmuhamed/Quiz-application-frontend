import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugagodinaComponent } from './drugagodina.component';

describe('DrugagodinaComponent', () => {
  let component: DrugagodinaComponent;
  let fixture: ComponentFixture<DrugagodinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugagodinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugagodinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
