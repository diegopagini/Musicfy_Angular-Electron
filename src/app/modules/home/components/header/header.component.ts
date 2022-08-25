import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/modules/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { userSelector } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(
    private store: Store,
    private router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.select(userSelector);
  }

  onBack(): void {
    this.router.navigate(['/home/dashboard']);
  }

  onLogout(): void {
    this._authService.logout();
  }
}
