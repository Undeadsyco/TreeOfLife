import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcidobacteriaComponent } from './acidobacteria.component';

describe('AcidobacteriaComponent', () => {
  let component: AcidobacteriaComponent;
  let fixture: ComponentFixture<AcidobacteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcidobacteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcidobacteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
