import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquificaeComponent } from './aquificae.component';

describe('AquificaeComponent', () => {
  let component: AquificaeComponent;
  let fixture: ComponentFixture<AquificaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquificaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquificaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
