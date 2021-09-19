import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './Components/game/game.component';
import { QuizEnglishComponent } from './components/quizes/quiz-english/quiz-english.component';
import { QuizSlovenianComponent } from './components/quizes/quiz-slovenian/quiz-slovenian.component';
import { QuizMathComponent } from './components/quizes/quiz-math/quiz-math.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    QuizEnglishComponent,
    QuizSlovenianComponent,
    QuizMathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
