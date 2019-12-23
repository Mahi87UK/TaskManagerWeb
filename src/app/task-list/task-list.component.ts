import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "../model/task.model";
import {TaskService} from "../task.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks:Observable<Task[]>;
  fields:any= {taskName:"",parentTaskName:"",priorityFrom:"",priorityTo:"",startDt:"",endDt:""};
  filters: any;
  constructor(private taskService:TaskService,private router:Router) { }

  ngOnInit() {
    console.log("load");
    this.loadTasks();
  }

  loadTasks(){
    this.tasks = this.taskService.getAllTasks();
  }

  updateFilters(): void {

    this.filters = Object.assign({}, this.fields);
  }

  endTask(task: Task): void{
      task.endTask = true;
  }
  viewTask(id: number): void{
    this.router.navigate(['details', id]);
  }

  editTask(id:number): void{
    this.router.navigate(['updateTask', id]);
  }
}
