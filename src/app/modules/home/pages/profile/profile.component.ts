import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/modules/auth/interfaces/auth.interface';

import { userSelector } from '../../../../store/selectors/auth.selector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user$ = this.store.select(userSelector);
  }
}
