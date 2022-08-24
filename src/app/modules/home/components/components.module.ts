import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SongPlayerComponent } from './song-player/song-player.component';

const components = [
  NavbarComponent,
  HeaderComponent,
  FooterComponent,
  ContentComponent,
  SongPlayerComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components],
})
export class ComponentsModule {}
