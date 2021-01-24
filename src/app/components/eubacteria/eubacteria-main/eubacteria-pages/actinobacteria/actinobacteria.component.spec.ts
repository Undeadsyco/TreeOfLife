import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActinobacteriaComponent } from './actinobacteria.component';

describe('ActinobacteriaComponent', () => {
  let component: ActinobacteriaComponent;
  let fixture: ComponentFixture<ActinobacteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActinobacteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActinobacteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
