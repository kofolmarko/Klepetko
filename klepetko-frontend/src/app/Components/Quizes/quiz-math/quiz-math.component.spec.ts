import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMathComponent } from './quiz-math.component';

describe('QuizMathComponent', () => {
  let component: QuizMathComponent;
  let fixture: ComponentFixture<QuizMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizMathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
