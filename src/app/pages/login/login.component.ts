import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonsModule } from '../../shared/commons/commons.module';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { LoginService } from '../../shared/services/login.service';
import { UserContextService } from '../../shared/services/user-context.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonsModule, InputTextModule, ButtonModule, MainLayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private userContextService: UserContextService,
    private router: Router
  ) {}

  user = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
  });

  login() {
    const user = this.user.getRawValue();
    this.loginService.login(user.username!, user.email!).subscribe((user) => {
      console.log(user);
      this.userContextService.setUser(user);
      this.router.navigate(['/dashboard']);
    });
  }
}
