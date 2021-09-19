import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSlovenianComponent } from './quiz-slovenian.component';

describe('QuizSlovenianComponent', () => {
  let component: QuizSlovenianComponent;
  let fixture: ComponentFixture<QuizSlovenianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizSlovenianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSlovenianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
