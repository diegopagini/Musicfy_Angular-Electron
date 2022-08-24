import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ComponentsModule } from './components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    AlbumsComponent,
    ArtistsComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ComponentsModule, SharedModule],
})
export class HomeModule {}
