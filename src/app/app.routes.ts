import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TodosComponent } from './features/dashboard/todos/todos.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'todos',
        component: TodosComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: LoginComponent,
  },
];
