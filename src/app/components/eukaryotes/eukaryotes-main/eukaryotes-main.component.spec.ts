import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EukaryotesMainComponent } from './eukaryotes-main.component';

describe('EukaryotesMainComponent', () => {
  let component: EukaryotesMainComponent;
  let fixture: ComponentFixture<EukaryotesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EukaryotesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EukaryotesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
