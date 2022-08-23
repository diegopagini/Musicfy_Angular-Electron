import { createReducer, on } from '@ngrx/store';

import { loginUser } from '../actions/auth.actions';
import { InitialState } from '../interfaces/initial-state.interface';

const initialState: InitialState = {
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
