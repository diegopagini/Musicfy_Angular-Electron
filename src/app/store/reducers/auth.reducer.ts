import { createReducer, on } from '@ngrx/store';

import { loginUser } from '../actions/auth.actions';

const initialState = {
  user: null,
  isAuth: false,
};

export const authReducer = createReducer(
  initialState,
  on(loginUser, (state, action) => ({
    ...state,
    user: action.payload,
    isAuth: true,
  }))
);