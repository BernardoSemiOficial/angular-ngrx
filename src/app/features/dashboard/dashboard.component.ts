import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonsModule } from '../../shared/commons/commons.module';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonsModule,
    MainLayoutComponent,
    ButtonModule,
    TodoListComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  inputNovoTodo = '';
}
