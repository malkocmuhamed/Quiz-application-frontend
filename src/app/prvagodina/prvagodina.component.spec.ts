import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvagodinaComponent } from './prvagodina.component';

describe('PrvagodinaComponent', () => {
  let component: PrvagodinaComponent;
  let fixture: ComponentFixture<PrvagodinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrvagodinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrvagodinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
