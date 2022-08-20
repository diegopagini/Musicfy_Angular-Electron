import { createAction, props } from '@ngrx/store';

export const loginUser = createAction(
  '[Auth] Login User',
  props<{ payload: any }>()
);
