import { Component } from '@angular/core';
import { ITask } from 'src/app/models/itask';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  todos!: ITask[];
  taskValue: string = '';
  myTask: ITask = {description: '', id: 0};
  index: number = 1;
  sortedIds!: number;

constructor(private todoService: TodoService) {}

ngOnInit() : void {

  this.todoService.readAll().subscribe({ next: (elements : ITask[]) => { this.todos = elements }, error: (err) => { alert("Error getting the list of tasks!")}});
  this.myTask.description = '';
}

createTask()
{
  this.index = this.todos.reduce((item, curr) => {
    return item.id < curr.id ? curr : item;
  }).id;
  this.myTask.description = this.taskValue;
  this.myTask.id = this.index + 1;
  this.todoService.create(this.myTask).subscribe(
    { next: (response) => {
      this.index+=1;
    this.ngOnInit();
    this.taskValue = '';
  }})
}

editTask(value: ITask)
{
  this.myTask.id = value.id;
  this.myTask.description = value.description;
  this.todoService.update(this.myTask).subscribe( 
    { next: (response) => {
    this.ngOnInit();
  }, error: (err) => { alert("Couldn't update the task.")} 
});
}

deleteTask(value: ITask)
{
  this.myTask.id = value.id;
  this.myTask.description = value.description;
  this.todoService.delete(this.myTask).subscribe( 
    { next: (response) => {
    alert("You deleted your task successfully!");
    this.ngOnInit();
  }, error: (err) => { alert("Couldn't delete the task.")} 
});
}

}
