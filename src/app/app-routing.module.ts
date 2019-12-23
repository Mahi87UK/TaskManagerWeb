import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent} from "./task-list/task-list.component";
import {AddtaskComponent} from "./addtask/addtask.component";
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {UpdateTaskComponent} from "./update-task/update-task.component";


const routes: Routes = [
  { path: '', redirectTo: 'viewTasks', pathMatch: 'full' },
  { path: 'viewTasks', component: TaskListComponent },
  { path: 'addTask', component: AddtaskComponent },
  { path: 'details/:id', component: TaskDetailsComponent },
  { path: 'updateTask/:id', component : UpdateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
