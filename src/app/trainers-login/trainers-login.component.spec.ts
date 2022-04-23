import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersLoginComponent } from './trainers-login.component';

describe('TrainersLoginComponent', () => {
  let component: TrainersLoginComponent;
  let fixture: ComponentFixture<TrainersLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainersLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
