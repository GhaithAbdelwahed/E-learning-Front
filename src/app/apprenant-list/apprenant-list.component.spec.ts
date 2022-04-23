import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenantListComponent } from './apprenant-list.component';

describe('ApprenantListComponent', () => {
  let component: ApprenantListComponent;
  let fixture: ComponentFixture<ApprenantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprenantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
