import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selector = createFeatureSelector<any>('app');

export const authSelector = createSelector(selector, (app) => app.auth);

export const isAuthSelector = createSelector(selector, (app) =>
  Boolean(app.user)
);
