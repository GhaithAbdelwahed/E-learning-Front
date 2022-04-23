import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraouselComponent } from './craousel.component';

describe('CraouselComponent', () => {
  let component: CraouselComponent;
  let fixture: ComponentFixture<CraouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
