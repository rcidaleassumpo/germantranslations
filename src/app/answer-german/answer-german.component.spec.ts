import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerGermanComponent } from './answer-german.component';

describe('AnswerGermanComponent', () => {
  let component: AnswerGermanComponent;
  let fixture: ComponentFixture<AnswerGermanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerGermanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerGermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
