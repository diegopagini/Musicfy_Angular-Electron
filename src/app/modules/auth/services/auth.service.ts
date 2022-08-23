import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SnackService } from 'src/app/shared/services/snack.service';
import { loginUser } from 'src/app/store/actions/auth.actions';

import { Auth, AuthResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private store: Store,
    private _snackService: SnackService
  ) {}

  /**
   * Register method.
   * @param {Auth} authData
   */
  register(authData: Auth): void {
    this.afAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(() => {
        this.router.navigate(['/auth']);
      })
      .catch((err: { message: string }) => {
        this._snackService.open(err.message || 'error');
      });
  }

  /**
   * Login method.
   * @param {Auth} authData
   */
  login(authData: Auth): void {
    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((data: AuthResponse | any) => {
        this.store.dispatch(loginUser({ payload: data.user }));
        this.router.navigate(['/home']);
      })
      .catch((err: { message: string }) => {
        this._snackService.open(err.message || 'error');
      });
  }
}
