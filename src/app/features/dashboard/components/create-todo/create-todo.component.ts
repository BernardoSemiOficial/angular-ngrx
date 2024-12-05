import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonsModule } from '../../../../shared/commons/commons.module';
import { Todo } from '../../../../shared/models/todo';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonsModule, InputTextModule, ButtonModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
})
export class CreateTodoComponent {
  @Output() onCreateTodo = new EventEmitter<Partial<Todo>>();
  todo: Partial<Todo> = {
    title: '',
    completed: false,
    body: '',
  };

  createTodo() {
    this.onCreateTodo.emit({ ...this.todo });
    this.todo = {
      title: '',
    };
  }
}
