import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
}
