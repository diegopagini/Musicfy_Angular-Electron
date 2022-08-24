import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  get emailError(): boolean {
    const email = this.registerForm.get('email');
    return email!.hasError('required') && email!.touched;
  }

  get passwordError(): boolean {
    const password = this.registerForm.get('password');
    return password!.hasError('required') && password!.touched;
  }

  onSubmit(): void {
    this._authService.register(this.registerForm.value);
  }

  onLogin(): void {
    this.router.navigateByUrl('/auth');
  }
}
