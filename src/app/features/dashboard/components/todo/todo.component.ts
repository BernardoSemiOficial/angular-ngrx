import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { Todo } from '../../../../shared/models/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ButtonModule, CheckboxModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input() todo: Todo = { id: '', title: '', body: '', completed: false };
  @Input() botaoDeletarTodo = false;
}
