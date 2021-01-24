import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchaeaMainComponent } from './archaea-main.component';

describe('ArchaeaMainComponent', () => {
  let component: ArchaeaMainComponent;
  let fixture: ComponentFixture<ArchaeaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchaeaMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchaeaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
