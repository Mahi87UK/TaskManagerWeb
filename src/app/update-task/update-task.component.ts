import { Component, OnInit } from '@angular/core';
import {Task} from "../model/task.model";
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  id: number;
  task: Task;
  submitted = false;
  constructor(private route: ActivatedRoute,private taskService:TaskService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getTaskData();
  }

  getTaskData(){
    this.taskService.getTaskDetails(this.id).subscribe(data => {
      this.task = data;
    }, error => console.log(error));
  }

  reset(){
    this.getTaskData();
    this.submitted = false;
  }

  updateTask(){
    this.taskService.updateTask(this.task).subscribe(data => console.log(data), error => console.log(error));
    this.submitted = true;
  }
}
