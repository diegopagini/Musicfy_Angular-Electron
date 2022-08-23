import { User } from 'src/app/modules/auth/interfaces/auth.interface';

export interface InitialState {
  user: User | null;
  isAuth: boolean;
}
