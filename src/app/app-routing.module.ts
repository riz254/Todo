import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { NewComponent } from './new/new.component';
import { HeaderComponent } from './header/header.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route (dashboard)
  { path: 'dashboard', component: TodolistComponent }, // Route for the todo list (dashboard)
  { path: 'New', component: NewComponent }, // Route for the new task form
  { path: 'todos/:id', component: TaskDetailComponent }, // Route for the task detail view
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
