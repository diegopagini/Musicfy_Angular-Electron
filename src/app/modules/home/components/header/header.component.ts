import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/modules/auth/interfaces/auth.interface';
import { userSelector } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user$ = this.store.select(userSelector);
  }
}
