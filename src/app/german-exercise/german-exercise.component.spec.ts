import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanExerciseComponent } from './german-exercise.component';

describe('GermanExerciseComponent', () => {
  let component: GermanExerciseComponent;
  let fixture: ComponentFixture<GermanExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GermanExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
