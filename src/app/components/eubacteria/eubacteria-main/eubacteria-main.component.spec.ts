import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EubacteriaMainComponent } from './eubacteria-main.component';

describe('EubacteriaMainComponent', () => {
  let component: EubacteriaMainComponent;
  let fixture: ComponentFixture<EubacteriaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EubacteriaMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EubacteriaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
