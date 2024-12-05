import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Todo } from '../../../../shared/models/todo';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Input() botaoDeletarTodo = false;
  @Output() onTodoDelete = new EventEmitter<Todo>();
  @Output() onTodoMarkAsDone = new EventEmitter<Todo>();

  handleOnTodoMarkAsDone(todo: Todo, isCompleted: boolean) {
    this.onTodoMarkAsDone.emit({ ...todo, completed: isCompleted });
  }
}
