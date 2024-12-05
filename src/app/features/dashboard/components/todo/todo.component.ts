import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonsModule } from '../../../../shared/commons/commons.module';
import { Todo } from '../../../../shared/models/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonsModule, ButtonModule, CheckboxModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input() todo: Todo = { id: 1, title: '', body: '', completed: false };
  @Input() botaoDeletarTodo = false;
  @Output() onTodoDelete = new EventEmitter<void>();
  @Output() onTodoMarkAsDone = new EventEmitter<boolean>();

  todoCompleted = this.todo.completed;
}
