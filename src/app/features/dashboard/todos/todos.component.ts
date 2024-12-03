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
