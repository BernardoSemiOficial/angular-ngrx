import { Component, OnInit } from '@angular/core';
import { CommonsModule } from '../../shared/commons/commons.module';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { Todo } from '../../shared/models/todo';
import { TodosService } from '../../shared/services/todos.service';
import { UserContextService } from '../../shared/services/user-context.service';
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
  todos: Todo[] = [];

  constructor(
    private todosService: TodosService,
    private userContextService: UserContextService
  ) {}

  get user() {
    return this.userContextService.user;
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    return this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  createTodo(todo: Partial<Todo>) {
    console.log(todo);
    this.todosService.createTodo(todo).subscribe((todo) => {
      this.todos = [todo, ...this.todos];
    });
  }
}
