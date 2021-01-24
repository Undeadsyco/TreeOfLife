import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacteroidetesComponent } from './bacteroidetes.component';

describe('BacteroidetesComponent', () => {
  let component: BacteroidetesComponent;
  let fixture: ComponentFixture<BacteroidetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacteroidetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacteroidetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
