import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AvatarUpdateComponent } from './avatar-update/avatar-update.component';
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
  AvatarUpdateComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule, NgxDropzoneModule, FormsModule],
  exports: [...components],
})
export class ComponentsModule {}
