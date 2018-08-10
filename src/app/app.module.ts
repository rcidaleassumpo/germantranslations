import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AnswerGermanComponent } from './answer-german/answer-german.component';
import { EnglishVersionComponent } from './english-version/english-version.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GermanExerciseComponent } from './german-exercise/german-exercise.component';
import { GermanPresentationComponent } from './german-presentation/german-presentation.component';


@NgModule({
  declarations: [
    AppComponent,
    AnswerGermanComponent,
    EnglishVersionComponent,
    NavbarComponent,
    GermanExerciseComponent,
    GermanPresentationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
