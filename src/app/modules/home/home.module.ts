import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    AlbumsComponent,
    ArtistsComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ComponentsModule],
})
export class HomeModule {}
