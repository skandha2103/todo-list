import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  localItem:string;
  todos:Todo[];

  constructor() { 
    // this.todos = [
    //   {
    //     sno:1,
    //     title:"This is title 1",
    //     active: true
    //   },
    //   {
    //     sno:2, 
    //     title:"This is title 2",
    //     active: true
    //   },
    //   {
    //     sno:3,
    //     title:"This is title 3",
    //     active: true
    //   }
    // ]
    this.localItem = localStorage.getItem("todos");
    if(this.localItem){
      this.todos = JSON.parse(this.localItem);
    }
    else{
      this.todos = [];
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    // console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    // console.log(todo)
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
