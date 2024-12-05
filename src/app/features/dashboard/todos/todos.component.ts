import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MainLayoutComponent } from '../../../shared/layouts/main-layout/main-layout.component';
import { Todo } from '../../../shared/models/todo';
import { TodosService } from '../../../shared/services/todos.service';
import { TodoListComponent } from '../components/todo-list/todo-list.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [RouterModule, MainLayoutComponent, TodoListComponent, ButtonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  currentPage = 1;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todosService.getTodos(this.currentPage).subscribe((todos) => {
      this.todos = todos;
    });
  }

  loadMore() {
    this.currentPage++;
    this.todosService.getTodos(this.currentPage).subscribe((todos) => {
      this.todos = [...this.todos, ...todos];
    });
  }

  deleteTodo(todo: Todo) {
    this.todosService.deleteTodo(todo.id).subscribe(() => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }

  markAsDone(todo: Todo) {
    this.todosService.deleteTodo(todo.id).subscribe(() => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }

  markAsDoneDone(todo: Todo) {
    console.log(todo);
    this.todosService.updateTodo(todo.id, todo).subscribe(() => {});
  }
}
