import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Task } from './model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = "http://localhost:8080/TaskManagerService"

  constructor(private http:HttpClient) { }

  getAllTasks():Observable<any>{
    return this.http.get(this.baseUrl+"/taskInfo/allTasks",{responseType:'json'});
  }

  addTask(task:Object):Observable<any>{
    return this.http.post(this.baseUrl+"/taskInfo/addTask",task);
  }

  getTaskDetails(id:number):Observable<any>{
    return this.http.get(this.baseUrl+"/taskInfo/viewTask/"+id,{responseType:'json'});
  }

  updateTask(task: Task):Observable<any>{
    return this.http.put(this.baseUrl+"/taskInfo/updateTask/"+task.taskId,task);
  }
}
