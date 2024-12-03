import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MainLayoutComponent } from '../../../shared/layouts/main-layout/main-layout.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [MainLayoutComponent, TodoListComponent, ButtonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {}
