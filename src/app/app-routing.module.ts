import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { TodoComponent } from './components/todoapp/todo/todo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
