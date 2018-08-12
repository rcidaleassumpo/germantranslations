import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AnswerGermanComponent } from './answer-german/answer-german.component';
import { EnglishVersionComponent } from './english-version/english-version.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GermanExerciseComponent } from './german-exercise/german-exercise.component';
import { GermanPresentationComponent } from './german-presentation/german-presentation.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';


@NgModule({
  declarations: [
    AppComponent,
    AnswerGermanComponent,
    EnglishVersionComponent,
    NavbarComponent,
    GermanExerciseComponent,
    GermanPresentationComponent,
    EnterLeaveComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FlexLayoutModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
