import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {}
