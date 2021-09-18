import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizEnglishComponent } from './quiz-english.component';

describe('QuizEnglishComponent', () => {
  let component: QuizEnglishComponent;
  let fixture: ComponentFixture<QuizEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
