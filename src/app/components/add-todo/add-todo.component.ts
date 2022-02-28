import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  localItem:string;
  title:string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.localItem = localStorage.getItem("todos")
    const todo = {
      sno: JSON.parse(this.localItem).length+1,
      title: this.title,
      active: true
    }
    this.todoAdd.emit(todo);
    this.title = "";
  }

}
