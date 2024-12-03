import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonsModule } from '../../../../shared/commons/commons.module';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonsModule, InputTextModule, ButtonModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
})
export class CreateTodoComponent {
  inputNovoTodo = '';
}
