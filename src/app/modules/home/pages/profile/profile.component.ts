import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
