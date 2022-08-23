import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const NAVIGATION_ROUTES = [
  { name: 'Home', icon: 'home icon', route: '/home/dashboard' },
  { name: 'Artists', icon: 'users icon', route: '/home/artists' },
  {
    name: 'Albums',
    icon: 'window maximize outline icon',
    route: '/home/albums',
  },
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  routes: { name: string; icon: string; route: string }[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routes = NAVIGATION_ROUTES;
  }
}
