import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../interfaces/auth-state.interface';

export const selector = createFeatureSelector<AppState>('app');

export const authSelector = createSelector(selector, (app) => app.auth);

export const isAuthSelector = createSelector(selector, (app) =>
  Boolean(app.user)
);
