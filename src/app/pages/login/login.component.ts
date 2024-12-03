import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonsModule } from '../../shared/commons/commons.module';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonsModule, InputTextModule, ButtonModule, MainLayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  value = '';
}
