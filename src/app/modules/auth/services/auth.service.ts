import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

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
      .catch((err) => {
        console.log({ err });
      });
  }

  /**
   * Login method.
   * @param {Auth} authData
   */
  login(authData: Auth): void {
    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((data: any) => {
        console.log({ data });

        // this.userId$.next(data.user.uid);
        this.router.navigate(['/home']);
        // this.isAuth$.next(true);
      })
      .catch((err) => {
        console.log({ err });
      });
  }
}
