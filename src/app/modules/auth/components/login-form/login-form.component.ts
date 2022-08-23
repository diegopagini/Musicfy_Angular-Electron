import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['test@test.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });
  }

  get emailError(): boolean {
    const email = this.loginForm.get('email');
    return email!.hasError('required') && email!.touched;
  }

  get passwordError(): boolean {
    const password = this.loginForm.get('password');
    return password!.hasError('required') && password!.touched;
  }

  onSubmit(): void {
    this._authService.login(this.loginForm.value);
  }

  onRegister(): void {
    this.router.navigateByUrl('/auth/register');
  }
}
