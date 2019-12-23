import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  id: number;
  task: Task;
  constructor(private route: ActivatedRoute,private taskService:TaskService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.taskService.getTaskDetails(this.id).subscribe(data => {
      this.task = data;
    }, error => console.log(error));
  }

}
