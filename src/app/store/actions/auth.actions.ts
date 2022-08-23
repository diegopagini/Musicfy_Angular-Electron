import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/modules/auth/interfaces/auth.interface';

export const loginUser = createAction(
  '[Auth] Login User',
  props<{ payload: User }>()
);

export const logoutUser = createAction('[Auth] Logout User');
