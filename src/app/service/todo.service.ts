import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {Todo} from './../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
      id: '100',
      title: 'Learn MEAN',
      isCompleted: false,
      date: new Date(),
    },
    
    {
      id: '101',
      title: 'Learn MERN',
      isCompleted: true,
      date: new Date(),
    },
    
    {
      id: '102',
      title: 'Learn JS',
      isCompleted: true,
      date: new Date(),
    },
  ]
  }

  getTodos = () => {
    return of(this.todos)
  }

  addTodo = (todo: Todo) => {
    this.todos.push(todo)
  }

  //Change Status
  updateTodo = (todo: Todo) => {
    this.todos.map(singleTodo => {
      if(singleTodo.id === todo.id){
        todo.isCompleted = !todo.isCompleted
      }
    })
  }

  //Delete Todo
  deleteTodo = (todo: Todo) => {
    const index = this.todos.findIndex((currentTodo) => currentTodo.id === todo.id)

    this.todos.splice(index, 1);

  }

}
