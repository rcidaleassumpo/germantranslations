import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishVersionComponent } from './english-version.component';

describe('EnglishVersionComponent', () => {
  let component: EnglishVersionComponent;
  let fixture: ComponentFixture<EnglishVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
