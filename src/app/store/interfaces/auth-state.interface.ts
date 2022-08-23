import { User } from 'src/app/modules/auth/interfaces/auth.interface';

import { InitialState } from './initial-state.interface';

export interface AppState {
  auth: InitialState;
  user: User | null;
}
