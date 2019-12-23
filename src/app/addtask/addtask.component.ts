import { Component, OnInit } from '@angular/core';
import {Task} from "../model/task.model";
import {ParentTask} from "../model/parent-task.model";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  task: Task;
  parentTask: ParentTask;
  submitted = false;

  constructor( private taskService: TaskService) {
    this.reset(false);
  }

  ngOnInit() {
  }

  reset(submittedFlag: boolean): void {
    this.submitted = submittedFlag;
    this.task = new Task();
    this.parentTask = new ParentTask();
    this.task.parentTask = this.parentTask;
  }

  addTask(){
    this.taskService.addTask(this.task).subscribe(data => console.log(data), error => console.log(error));
    this.reset(true);
  }

  onSubmit() {
    this.addTask();
  }
}
