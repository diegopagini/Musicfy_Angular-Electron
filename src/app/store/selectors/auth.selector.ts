import { createFeatureSelector, createSelector } from '@ngrx/store';

import { InitialState } from '../interfaces/initial-state.interface';

export const selector = createFeatureSelector<InitialState>('app');

export const userSelector = createSelector(selector, (app) => app.user);

export const isAuthSelector = createSelector(selector, (app) => app.isAuth);
