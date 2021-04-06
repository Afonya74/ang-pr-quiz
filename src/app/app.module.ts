import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { QuizeditorComponent } from './quizeditor/quizeditor.component';
import { QuestioneditorComponent } from './questioneditor/questioneditor.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    QuizeditorComponent,
    QuestioneditorComponent,
    QuizComponent,
    HomecomponentComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
