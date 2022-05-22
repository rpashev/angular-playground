import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { TodoComponent } from './components/todoapp/todo/todo.component';
import { TodoItemComponent } from './components/todoapp/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundPageComponent,
    TodoComponent,
    TodoItemComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
