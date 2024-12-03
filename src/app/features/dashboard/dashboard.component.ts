import { Component, OnInit } from '@angular/core';
import { CommonsModule } from '../../shared/commons/commons.module';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { Todo } from '../../shared/models/todo';
import { TodosService } from '../../shared/services/todos.service';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonsModule,
    MainLayoutComponent,
    CreateTodoComponent,
    TodoListComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  inputNovoTodo = '';
  todos: Todo[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    return this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
