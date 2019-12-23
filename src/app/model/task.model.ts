import {ParentTask} from "./parent-task.model"
export class Task {
  taskId:Number;
  taskName:String;
  startDate:Date;
  endDate:Date;
  priority:Number;
  parentTask:ParentTask;
  endTask:boolean;
}
